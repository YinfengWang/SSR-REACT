import React, { Component, Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { actions } from './store/';
import { Redirect } from 'react-router-dom';
import styles from './style.css';

class Translation extends Component {
    getList = () => {
        const { list } = this.props;
        if (list)
            return list.map(item => <div className={styles.item} key={item.id}>{item.title}</div>)
    }
    render() {
        return this.props.isLog ?
            <Fragment>
                <Helmet>
                    <title>SSR-翻译列表</title>
                    <meta name="description" content='翻译列表'></meta>
                </Helmet>
                <div className={styles.container}>{this.getList()}</div>
            </Fragment>
            : <Redirect to='/'></Redirect>
    }
    componentDidMount() {
        if (!this.props.list.length)
            this.props.getTranslationList();
    }
}


const mapStateToProps = state => {
    return ({
        list: state.translation.list,
        isLog: state.header.isLog
    })
}
const mapDispatchToProps = dispatch => ({
    getTranslationList() {
        dispatch(actions.getTranslationList());
    }
})

const ExportTranslation = connect(mapStateToProps, mapDispatchToProps)(Translation);

ExportTranslation.loadData = (store) => {
    return store.dispatch(actions.getTranslationList());
}
export default withStyles(styles)(ExportTranslation);