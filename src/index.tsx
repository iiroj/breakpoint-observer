import * as React from 'react'

interface BreakpointConfig {
  [key: string]: number
}

interface ChildFunc {
  breakpoint?: number | string,
  width?: number
}

interface Props {
  breakpoints?: BreakpointConfig,
  children: (props: ChildFunc) => React.ReactNode,
  defaultBreakpoint?: number | string
}

interface State {
  breakpoint?: number | string,
  breakpoints: BreakpointConfig,
  width: number | null,
}

export default class BreakpointObserver extends React.PureComponent<Props, State> {
  constructor (props) {
    super(props)

    this.state = {
      breakpoint: props.defaultBreakpoint,
      breakpoints: props.breakpoints,
      width: null
    }
  }

  componentWillMount () {
    if (window) {
      this.getCurrentWidth()
    }
  }

  componentDidMount () {
    if (window) {
      this.getCurrentWidth()
      window.addEventListener('resize', this.debouncedGetCurrentWidth)

      if (this.props.breakpoints) {
        this.addBreakpointListener()
      }
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.debouncedGetCurrentWidth)
  }

  getCurrentWidth = () => {
    if (window) this.setState({ width: window.innerWidth })
  }

  debouncedGetCurrentWidth = () => setTimeout(this.getCurrentWidth, 100)

  addBreakpointListener = () => {
    const { breakpoints } = this.props

    console.log(Object.keys(breakpoints)
    .sort((a, b) => breakpoints[a] - breakpoints[b]))

    Object.keys(breakpoints)
      .sort((a, b) => breakpoints[a] - breakpoints[b])
      .forEach((breakpoint, index) => {
        const minWidth = breakpoints[breakpoint]
      })
  }

  render () {
    const { children } = this.props

    if (typeof children !== 'function') return null

    const { breakpoint, width } = this.state

    return this.props.children({ breakpoint, width })
  }
}
