import styles from './Music.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Music() {
    const [file, setFile] = useState();
    const handleOnchange = (e) => {
        const file = e.target.files[0];
        console.log(file);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('playlist')}>
                <div className={cx('playlist-header')}>
                    <span>Playlist</span>
                    <div className={cx('playlist-header-add')}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                <div className={cx('playlist-content')}></div>
            </div>
            <div className={cx('content')}>
                <ul className={cx('content-header')}>
                    <li className={cx('content-header-item')}>Bài hát</li>
                    <li className={cx('content-header-item', 'active')}>MV</li>
                </ul>
                <ul className={cx('content-body')}>
                    <div className={cx('content-body__title')}>
                        <p className={cx('content-body__item')}>Bài hát</p>
                        <p className={cx('content-body__item')}>MV</p>
                        <p className={cx('content-body__item')}>Thời gian</p>
                    </div>
                </ul>
            </div>
            <input type={'file'} value={file} onChange={handleOnchange}></input>
        </div>
    );
}

export default Music;
