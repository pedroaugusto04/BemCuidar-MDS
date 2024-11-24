import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  private activeRequests = 0;
  private isLoadingSubject = new BehaviorSubject<boolean>(false);

  getLoadingState() {
    return this.isLoadingSubject.asObservable();
  }

  show() {
    this.activeRequests++;
    this.updateLoadingState();
  }

  hide() {
    this.activeRequests--;
    this.updateLoadingState();
  }

  private updateLoadingState() {
    if (this.activeRequests > 0) {
      this.isLoadingSubject.next(true);
    } else {
      this.isLoadingSubject.next(false);
    }
  }
}
