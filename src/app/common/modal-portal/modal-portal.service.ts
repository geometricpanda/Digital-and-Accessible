import {ElementRef, Injectable, ViewContainerRef} from '@angular/core';
import {TemplatePortal} from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class ModalPortalService {

  templatePortalRef: ViewContainerRef;
  templatePortal: TemplatePortal;
  portalHost: ElementRef<HTMLElement>

}
