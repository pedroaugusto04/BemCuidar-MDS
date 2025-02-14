import { Request, Response } from "express";
import { ServiceProvider } from "../models/ServiceProvider";
import { ServiceProviderService } from "../services/service-provider.service";
import { uploadFile } from "../utils/fileUploadUtils";
import { getUserIdByToken } from "../utils/jwtAuth";
import { UserService } from "../services/user.service";
import { ServiceRequest } from "../models/ServiceRequest";
import { RequestStatus } from "../models/enums/RequestStatus";

export class ServiceProviderController {
  public static async getProviders(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const providers = await ServiceProviderService.getProviders();
      if (token) {
        const userId = getUserIdByToken(token);
        const favoritedProvidersId = await UserService.getFavoritedProvidersId(
          userId
        );

        providers.forEach(provider => {
          if (favoritedProvidersId.includes(provider.id)){
            provider.favorited = true;
          }
        })
      } 
      return res.status(200).json(providers);
    } catch (error: any) {
      res.status(500).json({ message: "Erro ao buscar cuidadores." });
    }
  }

  public static async deleteProvider(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      if (token) {
        const providerId = req.params.providerId;
        await ServiceProviderService.deleteProvider(providerId);
      } 
      return res
          .status(200)
          .json({ message: "Anuncio deletado com sucesso!" });
    } catch (error: any) {
      res.status(500).json({ message: "Erro ao deletar anuncio." });
    }
  }

  public static async createProvider(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      let createdProvider: ServiceProvider;
      if (token){
        const userId = getUserIdByToken(token);
        const newProvider: ServiceProvider = req.body;
        if (req.files && "photo" in req.files) {
          let downloadUrl = await uploadFile(req.files["photo"][0]);
          newProvider.photo = downloadUrl ? downloadUrl : "";
        }

        createdProvider = await ServiceProviderService.createProvider(
          newProvider,userId
        ); 
        return res.status(201).json(createdProvider);
      }
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao registrar cuidador." });
    }
  }

  public static async updateProvider(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      let updatedProvider: ServiceProvider;
      if (token){
        const userId = getUserIdByToken(token);
        const newProvider: ServiceProvider = req.body;
        
        if (req.files && "photo" in req.files) {
          let downloadUrl = await uploadFile(req.files["photo"][0]);
          newProvider.photo = downloadUrl ? downloadUrl : "";
        }

        updatedProvider = await ServiceProviderService.updateProvider(
          newProvider,userId
        ); 
        return res.status(201).json(updatedProvider);
      }
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao atualizar anuncio." });
    }
  }

  public static async getProviderAnnouncements(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      let providerAnnouncements: ServiceProvider[] = [];
      if (token){
        const userId = getUserIdByToken(token);
        providerAnnouncements = await ServiceProviderService.getProviderAnnouncements(userId);
      }
      return res.status(200).json(providerAnnouncements);
    } catch (error: any) {
      res.status(500).json({ message: "Erro ao buscar Anúncios do cuidador." });
    }
  }

  public static async getRequests(req: Request, res: Response){
    try {
      const token = req.headers.authorization;
      let providerRequests: ServiceRequest[] = [];
      if (token){
        const userId = getUserIdByToken(token);
        providerRequests = await ServiceProviderService.getRequests(userId);
      }
      return res.status(200).json(providerRequests);
    } catch (error: any) {
      res.status(500).json({ message: "Erro ao buscar pedidos do cuidador." });
    }
  }

  public static async getRequest(req: Request, res: Response){
    try {
      const token = req.headers.authorization;
      const requestId = req.params.requestId;
      if (token && requestId){
        const userId = getUserIdByToken(token);
        const providerRequest = await ServiceProviderService.getRequest(userId, requestId);
        return res.status(200).json(providerRequest);
      }
    } catch (error: any) {
      res.status(500).json({ message: "Erro ao buscar pedido do cuidador." });
    }

  }

  public static async setRequestStatus(req: Request, res: Response){
    try {
      const token = req.headers.authorization;
      const requestId = req.params.requestId;
      let providerId;
      if (token) {
        providerId = getUserIdByToken(token);
      }
      if (providerId && requestId) {
        const status_string: string = req.body.status.toLowerCase();
        let status: RequestStatus;
        switch(status_string) {
          case "pendente":
            status = RequestStatus.PENDENTE;
            break;
          case "aceito":
            status = RequestStatus.ACEITO;
            break;
          case "negado":
            status = RequestStatus.NEGADO;
            break;
          case "excluido":
            status = RequestStatus.EXCLUIDO;
            break;
          default:
            return res.status(401).json({ message: "Status inválido na entrada! deve ser um de: pendente, aceito, negado, excluido" });
        }
        await ServiceProviderService.setRequestStatus(providerId, requestId, status);
        return res
          .status(200)
          .json({ message: "Status setado com sucesso!" });
      } else {
        res.status(404).json({ message: "Usuário não encontrado." });
      }
    } catch (error: any) {
      res.status(500).json({ message: "Erro ao setar o status do pedido." });
    }
  }
}
