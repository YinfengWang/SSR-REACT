import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store/';
import styles from './style.css';


class Header extends React.Component {
    render() {
        const { isLog, handleLogOut, handleLogin } = this.props;
        return (
            <div className={styles.container}>
                <Link to='/' className={styles.item}>首页</Link>
                {
                    isLog ?
                        <Fragment>
                            <Link to='/translation' className={styles.item}>翻译列表</Link>
                            <div className={styles.item} onClick={handleLogOut}>退出</div>
                        </Fragment> : <div className={styles.item} onClick={handleLogin}>登录</div>
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return (
        { isLog: state.header.isLog }
    )
}
const mapDispatchToProps = dispatch => ({
    handleLogin() {
        dispatch(actions.loginAction())
    },
    handleLogOut() {
        dispatch(actions.logOutAction())
    },
})
const ExportHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default withStyles(styles)(ExportHeader);
