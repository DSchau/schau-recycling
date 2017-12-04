import React, { Component } from 'react';
import Link from 'next/link'

export default class Index extends Component {
  componentDidMount() {
    console.log('sup');
  }

  render() {
    return (
      <div>
        <Link href="/about"><a>About</a></Link>
      </div>
    );
  }
}
