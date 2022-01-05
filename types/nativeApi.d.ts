export interface nativeApi {
  getPlatForm(): number
  getSsoToken(): Promise<object>
  callApi(name: string, method: string, params: any[]): Promise<object>
  getPicture(params: object, env?: string): Promise<object>
  exit(): void
  changeColor(p: any[]): Promise<object>
  fullscreen(): Promise<object>
  hideFloat(): Promise<object>
  showWidget(args: any[]): Promise<object>
  hideNav(): Promise<object>
  meixinVedio(time: number): Promise<object>
  upLoadMeixinVedio<T>(time: number, options?: T): Promise<object>
  photoAlbum(): Promise<object>
  upLoadVideoAlbum<T>(apiUrl: string, token: string, options?: T): Promise<object>
  faceAuth(winParam: any): Promise<object>
}
