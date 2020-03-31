import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import sanityClient from 'part:@sanity/base/client'
import MdDescription from 'react-icons/lib/md/description'

const fetchRootPages = () => {
  return sanityClient.fetch('*[_type == "page" && isRoot]')
}

const fetchPages = docIds => {
  return sanityClient.fetch('*[_id in $docIds]', {docIds})
}

const listItemsForPages = pages => {
  return pages.map(page =>
    S.listItem()
      .title(page.title)
      .icon(MdDescription)
      .child(pageId => {
        if (page.childPages) {
          return fetchPages(page.childPages.map(child => child._ref)).then(childPages => {
            return S.list()
              .title(`Children of ${page.title}`)
              .items(listItemsForPages(childPages))
          })
        }
        return S.component()
          .title('Dead end :/')
          .component(
            <div>
              <h3>{page.title || page._id}</h3>
              <p>Has no child pages</p>
            </div>
          )
      })
  )
}

export default () => {
  return fetchRootPages().then(rootPages => {
    return S.list()
      .title(`Everything`)
      .items([
        ...listItemsForPages(rootPages),

        S.listItem()
          .title('All Pages')
          .schemaType('page')
          .child(
            S.documentList()
              .title('Pages')
              .filter('_type == "page"')
          )
      ])
  })
}
