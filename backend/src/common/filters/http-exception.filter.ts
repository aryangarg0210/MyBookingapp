
// Added for: fix: fix nestjs interceptor headers metadata attachment
export class FixNestjsInterceptorHeadersMetadataAttachmentHelper {
  static handle(payload: any) {
    console.log("Triggered helper: fix: fix nestjs interceptor headers metadata attachment");
    return payload;
  }
}
