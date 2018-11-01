import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GoldenLayout from 'golden-layout'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'
import 'golden-layout/src/css/goldenlayout-base.css'

const myLayout = new GoldenLayout({
  content: [
    {
      type: 'row',
      content: [
        {
          type: 'react-component',
          component: 'test-component',
          props: { label: 'A' }
        },
        {
          type: 'column',
          content: [
            {
              type: 'react-component',
              component: 'test-component',
              props: { label: 'B' }
            },
            {
              type: 'react-component',
              component: 'test-component',
              props: { label: 'C' }
            }
          ]
        }
      ]
    }
  ]
})

export default class Demo extends Component {
  render() {
    return <div>{this.props.label}</div>
  }
}

myLayout.registerComponent('test-component', Demo)

//Once all components are registered, call
myLayout.init()
