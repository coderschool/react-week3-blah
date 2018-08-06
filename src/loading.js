import { Spinner } from '@blueprintjs/core';

const withLoadingHandling = (WrappedComponent) => {
  return class extends React.Component {
    render () {
      const { loading, ...rest } = this.props;

      return loading ? 
        (<Spinner />) :
        (<WrappedComponent {...rest} />)
    }
  };
}
