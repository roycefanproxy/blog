import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { Props as CusdisProps } from '@/components/comments/Cusdis'
import { Props as UtterancesProps } from '@/components/comments/Utterances'
import { Props as DisqusProps } from '@/components/comments/Disqus'
import { Props as GiscusProps } from '@/components/comments/Giscus'

const UtterancesComponent = dynamic(
  () => {
    return import('@/components/comments/Utterances')
  },
  { ssr: false }
) as React.FC<UtterancesProps>

const GiscusComponent = dynamic(
  () => {
    return import('@/components/comments/Giscus')
  },
  { ssr: false }
) as React.FC<GiscusProps>

const DisqusComponent = dynamic(
  () => {
    return import('@/components/comments/Disqus')
  },
  { ssr: false }
) as React.FC<DisqusProps>

const CusdisComponent = dynamic(
  () => {
    return import('@/components/comments/Cusdis')
  },
  { ssr: false }
) as React.FC<CusdisProps>

interface CommentsProps {
  frontMatter: PostFrontMatter
}

const Comments = ({ frontMatter }: CommentsProps) => {
  let term
  switch (
    siteMetadata.comment.giscusConfig.mapping ||
    siteMetadata.comment.utterancesConfig.issueTerm
  ) {
    case 'pathname':
      term = frontMatter.slug
      break
    case 'url':
      term = window.location.href
      break
    case 'title':
      term = frontMatter.title
      break
  }

  /*
  return (
    <div id="comment">
      {siteMetadata.comment && siteMetadata.comment.provider === 'cusdis' && (
        <CusdisComponent frontMatter={frontMatter} />
      )}
    </div>
  )
  */
  return (
    <div id="comment">
      {siteMetadata.comment && siteMetadata.comment.provider === 'cusdis' && (
        <CusdisComponent frontMatter={frontMatter} />
      )}

      {siteMetadata.comment && siteMetadata.comment.provider === 'giscus' && (
        <GiscusComponent mapping={term} />
      )}
      {siteMetadata.comment && siteMetadata.comment.provider === 'utterances' && (
        <UtterancesComponent issueTerm={term} />
      )}
      {siteMetadata.comment && siteMetadata.comment.provider === 'disqus' && (
        <DisqusComponent frontMatter={frontMatter} />
      )}
    </div>
  )
}

export default Comments
