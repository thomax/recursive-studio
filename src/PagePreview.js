/* eslint-disable react/prop-types */

import React from 'react'
import PropTypes from 'prop-types'

export default class PagePreview extends React.Component {
  static propTypes = {
    document: PropTypes.object
  }

  render() {
    const doc = this.props.document.displayed

    return <pre>{JSON.stringify(doc, null, 2)}</pre>
  }
}
