import { Component } from 'react'
import PropTypes from 'prop-types'

export default class DynamicImport extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
  }

  state = {
    component: null,
  }

  componentDidMount() {
    this.props.load().then((mod) =>
      this.setState(() => ({
        // If the module we’re dynamically importing is using ES modules (export default), it’ll have a .default property.
        //  If the module is using commonjs (module.exports), it won’t.
        component: mod.default ? mod.default : mod,
      }))
    )
  }

  render() {
    return this.props.children(this.state.component)
  }
}
