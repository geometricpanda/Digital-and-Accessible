import {ElementRef, Injectable, ViewContainerRef} from '@angular/core';
import {TemplatePortal} from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class ModalPortalService {

  /* Instance of the Portal View Container */
  templatePortalRef: ViewContainerRef;

  /* Content to be portalled */
  templatePortal: TemplatePortal;

  /* Used to apply aria hidden */
  portalHost: ElementRef<HTMLElement>;

}
