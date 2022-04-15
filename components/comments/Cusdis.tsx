import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import siteMetadata from '@/data/siteMetadata'
import { PostFrontMatter } from 'types/PostFrontMatter'

export interface Props {
  frontMatter: PostFrontMatter
}

const Cusdis = ({ frontMatter }: Props) => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true)
  const { theme, resolvedTheme } = useTheme()
  const commentsTheme =
    theme === 'dark' || resolvedTheme === 'dark'
      ? siteMetadata.comment.cusdisConfig.darkTheme
      : siteMetadata.comment.cusdisConfig.theme

  const COMMENTS_ID = 'cusdis_thread'

  const LoadComments = () => {
    setEnabledLoadComments(false)

    // @ts-ignore
    if (window.CUSDIS === undefined) {
      console.log(`currentTheme: ${commentsTheme}`)
      const { host, appID } = siteMetadata.comment.cusdisConfig
      const script = document.createElement('script')
      const cusdis = document.getElementById(COMMENTS_ID)
      script.src = 'https://comment.roycefan95.page/js/cusdis.es.js'
      script.async = true
      script.defer = true
      cusdis.setAttribute('data-host', host)
      cusdis.setAttribute('data-app-id', appID)
      cusdis.setAttribute('data-page-id', frontMatter.slug)
      cusdis.setAttribute('data-page-url', window.location.href)
      cusdis.setAttribute('data-page-title', frontMatter.title)
      cusdis.setAttribute('data-theme', commentsTheme)

      const comments = document.getElementById(COMMENTS_ID)
      if (comments) comments.appendChild(script)
    } else {
      // @ts-ignore
      window.CUSDIS.setTheme(commentsTheme)
    }
  }

  useEffect(() => {
    console.log(`currentTheme: ${commentsTheme}`)
    // @ts-ignore
    if (window.CUSDIS !== undefined) {
      // @ts-ignore
      window.CUSDIS.setTheme(commentsTheme)
    }
  }, [commentsTheme])

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      {enableLoadComments && <button onClick={LoadComments}>Load Comments</button>}
      <div className="cusdis" id={COMMENTS_ID} />
    </div>
  )
}

export default Cusdis
