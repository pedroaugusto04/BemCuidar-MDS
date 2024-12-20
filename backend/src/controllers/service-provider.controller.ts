import { Request, Response } from "express";
import { ServiceProvider } from "../models/ServiceProvider";
import { ServiceProviderService } from "../services/service-provider.service";
import { uploadFile } from "../utils/fileUploadUtils";
import { getUserIdByToken } from "../utils/jwtAuth";
import { UserService } from "../services/user.service";

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
}
