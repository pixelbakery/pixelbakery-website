import axios from 'axios'
import * as tus from 'tus-js-client'
import { Uploader, MediaVimeoItem, MediaProvider } from '@lib/types'

type VimeoPresignUploadingResponse = {
  upload: {
    upload_link: string
  }
  uri: string
}

export default class MediaUploaderVimeo implements Uploader {
  async upload(
    file: File,
    onProgress?: (bytesUploaded: number, bytesTotal: number) => void,
  ): Promise<MediaVimeoItem> {
    const presignedLinkResponse = await axios.post<VimeoPresignUploadingResponse>('/api/vimeo', {
      size: file.size,
    })

    const uploadURI = presignedLinkResponse.data.upload.upload_link
    const vimeoVideoLink = presignedLinkResponse.data.uri
    const vimeoId = vimeoVideoLink.split('/').slice(-1)[0]

    return new Promise<MediaVimeoItem>((resolve, reject) => {
      const uploader = new tus.Upload(file, {
        uploadUrl: uploadURI,
        endpoint: uploadURI,
        onError: (error) => {
          reject(error)
          console.log(error)
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          onProgress?.(bytesUploaded, bytesTotal)
        },
        onSuccess: () => {
          resolve({
            provider: MediaProvider.VIMEO,
            id: vimeoId,
          })
        },
      })
      uploader.start()
    })
  }
}
