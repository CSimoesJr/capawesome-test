import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { FaceDetectionRoutingModule } from './face-detection-routing.module';

import { FaceDetectionPage } from './face-detection.page';
import { PoButtonModule } from '@po-ui/ng-components';

@NgModule({
  imports: [SharedModule, FaceDetectionRoutingModule, PoButtonModule],
  declarations: [FaceDetectionPage],
})
export class FaceDetectionModule {}
