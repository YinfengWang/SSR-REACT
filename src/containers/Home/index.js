import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import withStyles from 'isomorphic-style-loader/withStyles';
import { actions } from './store/';
import styles from './style.css';

class Home extends Component {

    getList = () => {
        const { list } = this.props;
        return list.map(item => <div className={styles.item} key={item.id}>{item.title}</div>)
    }
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>SSR-首页新闻列表</title>
                    <meta name="description" content='这是首页新闻列表'></meta>
                </Helmet>
            <div className={styles.container}>
                {
                    this.getList()
                }
            </div>
            </Fragment>
        );
    }
    componentDidMount() {
        if (!this.props.list.length)
            this.props.getHomeList();
    }
}

const mapStateToProps = state => {
    return ({
        list: state.home.newList,
    })
}
const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(actions.getHomeListAction())
    }
})
const ExportHome = connect(mapStateToProps, mapDispatchToProps)(Home);
ExportHome.loadData = (store) => {
    return store.dispatch(actions.getHomeListAction());
}
export default withStyles(styles)(ExportHome);
