/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useMemo } from 'react'
import Link from 'next/link'
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import { ComponentMap, getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

const Wrapper: React.ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout {...rest} />
}

const CustomLink = ({
  href,
  className,
  ...rest
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  if (className) {
    className = `transition-all ease-in-out duration-200 ${className}`
  } else {
    className = 'transition-all ease-in-out duration-200'
  }

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={className} {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} className={className} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} className={className} {...rest} />
}

export default CustomLink

export const MDXComponents: ComponentMap = {
  Image,
  //@ts-ignore
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  //@ts-ignore
  BlogNewsletterForm,
}

interface Props {
  layout: string
  mdxSource: string
  [key: string]: unknown
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
