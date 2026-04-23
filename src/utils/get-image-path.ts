export function getImagePath(path: string): string {
  if (!path) return "";
  
  // Se a imagem for externa ou base64, não mexe
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  
  // O basePath definido no next.config.ts
  const basePath = "/portfolio";
  
  // Se já começar com o basePath (ex: em links gerados pelo Next.js), não duplica
  if (path.startsWith(basePath)) return path;
  
  // Normaliza o path para garantir que começa com /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  // No desenvolvimento local (next dev), as imagens no /public são servidas no /portfolio/images...
  // se o basePath estiver ativo. 
  return `${basePath}${cleanPath}`;
}

