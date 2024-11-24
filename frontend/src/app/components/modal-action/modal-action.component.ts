import { ServiceProvider } from "../../models/ServiceProvider";
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  inject,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ModalActionService } from "./services/modal-action.service";
//import { ProjectActionService } from "../project-action/services/project-action.service";
//import { IModal } from "../models/iModal";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { MatChipInputEvent } from "@angular/material/chips";
//import { isLink, noWhitespaceValidator } from "../../Validators/validators";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { preSelectedTags } from "./helper";
import { Observable, map, startWith } from "rxjs";

@Component({
  selector: "app-modal-action",
  templateUrl: "./modal-action.component.html",
  styleUrls: ["./modal-action.component.scss"],
})
export class ModalActionComponent implements OnInit {
  //tag system
  formControl = new FormControl("", [Validators.required]);
  announcer = inject(LiveAnnouncer);
  isFieldClicked: boolean = false;

  form!: FormGroup;

  serviceProvider!: ServiceProvider | null;
  selectedImage: string | undefined;
  formData = new FormData();
  hasErrorImg: string = "";

  user: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public modal: IModal,
    private modalService: ModalActionService,
    private projectActionService: ProjectActionService,
    private viewProjectInfoService: ViewProjectInfoService,
    private formBuilder: NonNullableFormBuilder
  ) {
    const userId = JSON.parse(sessionStorage.getItem("id") || "");
    this.modalService
      .getUserInfo(userId)
      .subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    // Logica para preencher informaçoes do projeto ao editá-lo
    const currentProject = this.modalService.currentProject;
    if (currentProject) {
      this.project = currentProject.data;
    }
    this.selectedImage = this.project?.imgUrl as string;

    this.form = this.formBuilder.group({
      title: [
        this.project ? this.project.title : "",
        [Validators.required, noWhitespaceValidator(), Validators.minLength(5)],
      ],
      link: [
        this.project ? this.project.link : "",
        [isLink(), Validators.required],
      ],
      description: [
        this.project ? this.project.description : "",
        [Validators.required],
      ],
    });
    this.modalService.clearProjectInfo(); // retorna ao estado inicial (inputs vazios)
  }

  formErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);
    if (field?.hasError("required")) {
      return "Este campo é necessário";
    }
    if (field?.hasError("whitespace")) {
      return "Este campo não pode conter apenas espaços em branco";
    }
    if (field?.hasError("minlength")) {
      return "Este campo está muito curto";
    }
    if (field?.hasError("link")) {
      return "Link inválido";
    }

    return "Este campo é necessário";
  }

  addProject() {
    const idUser = this.user.id;
    const action: string = "adicionar";
    this.formData.append("title", this.form.value.title);
    this.formData.append("link", this.form.value.link);
    this.formData.append("description", this.form.value.description);
    this.formData.append("idUser", idUser);
    this.modalService.createProjectModal(this.formData).subscribe({
      next: () => {
        this.projectActionService.openDialog(action, "success");
        this.modalService.emit();
      },
      error: (error) => {
        this.projectActionService.openDialog(action, "error");
      },
    });
  }

  editProject() {
    const idUser = this.user.id;
    const action: string = "editar";
    this.formData.append("title", this.form.value.title);
    this.formData.append("link", this.form.value.link);
    this.formData.append("description", this.form.value.description);
    this.formData.append("idUser", idUser);
    this.modalService
      .putProjectModal(this.formData, this.project?.id!)
      .subscribe({
        next: () => {
          this.projectActionService.openDialog(action, "success");
          this.modalService.emit();
        },
        error: (error) => {
          this.projectActionService.openDialog(action, "error");
        },
      });
  }

  viewProject() {
    const projectForm = this.form.value;
    const project: IProject = {
      userName: this.user.name,
      lastName: this.user.lastName,
      iconUrl: this.user.iconUrl,
      title: projectForm.title,
      tags: this.tags,
      link: projectForm.link,
      description: projectForm.description,
      createdAt: projectForm.createdAt,
      imgUrl: this.selectedImage,
    };
    //this.viewProjectInfoService.openDialog(project);
  }

  isButtonDisabled(): boolean {
    return this.form.invalid || this.tags.length === 0;
  }
}
