import * as React from 'react'

export interface IBreakpointConfig {
  readonly [key: string]: number
}

export interface IChildFunc {
  readonly breakpoint?: number | string,
  readonly width?: number
}

export interface IProps {
  readonly breakpoints?: IBreakpointConfig,
  readonly children: (props: IChildFunc) => React.ReactNode,
  readonly defaultBreakpoint?: number | string
}

export interface IState {
  breakpoint?: number | string,
  breakpoints: IBreakpointConfig,
  width: number | null,
}

export default class BreakpointObserver extends React.PureComponent<IProps, IState> {
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

      if (this.props.breakpoints) {
        this.listenForBreakpoints()
      }
    }
  }

  componentDidMount () {
    if (window) {
      this.getCurrentWidth()
      window.addEventListener('resize', this.debouncedGetCurrentWidth)

      if (this.props.breakpoints) {
        this.listenForBreakpoints()
      }
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.debouncedGetCurrentWidth)
  }

  getCurrentWidth = () => this.setState({ width: window.innerWidth })

  debouncedGetCurrentWidth = () => setTimeout(this.getCurrentWidth, 100)

  listenForBreakpoints () {
    const { breakpoints } = this.props
    const sortedBreakpoints = Object.keys(breakpoints)
      .sort((a, b) => breakpoints[b] - breakpoints[a])

    let query

    sortedBreakpoints.forEach((breakpoint, index) => {
      const minWidth = breakpoints[breakpoint]
      const nextWidth = sortedBreakpoints[index - 1]

      if (minWidth >= 0) {
        query = `(min-width: ${minWidth}px)`
      }

      if (typeof nextWidth !== 'undefined') {
        if (query) {
          query += ' and '
        }

        query += `(max-width: ${breakpoints[nextWidth] - 1}px)`
      }

      let mediaQuery = window.matchMedia(query)

      if (mediaQuery.matches) {
        this.setState({ breakpoint: Object.entries(breakpoints).find(i => i[1] === minWidth)[0] })
      }

      mediaQuery.addListener(() => {
        if (mediaQuery.matches) {
          this.setState({ breakpoint: Object.entries(breakpoints).find(i => i[1] === minWidth)[0] })
        }
      })
    })
  }

  render () {
    const { children } = this.props

    if (typeof children !== 'function') return null

    const { breakpoint, width } = this.state

    return this.props.children({ breakpoint, width })
  }
}
