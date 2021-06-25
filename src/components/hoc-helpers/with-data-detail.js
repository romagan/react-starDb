import React, { Component } from 'react';
import Spinner from '../spinner';

const withDataDetail = (View) => {
  return class extends Component {
    state = {
      item: null,
      image: null,
      isLoading: false
    }

    componentDidMount() {
      this.updateItem();
    }

    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updateItem();
      }
    }

    updateItem() {
      const { itemId } = this.props;

      if (!itemId) return;

      this.setState({isLoading: true});

      this.props.getData(itemId)
        .then((item) => {
          this.setState({
            item,
            image: this.props.getImageUrl(item),
            isLoading: false
          });
        })
    }

    render() {
      if (this.state.isLoading) {
        return <Spinner />;
      }

      const { item, image } = this.state;

      return (
        <View {...this.props } item={ item } image={ image } />
      )
    }
  }
}

export default withDataDetail;
