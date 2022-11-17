export interface IFileUpload {
  placeholder?: string
  acceptTypes?: string
  limitSize: number
  capture?: 'user' | 'environment' | null // Abre a camera do usuário para captura de um arquivo
  onFileUploaded: (e: File) => void
}
