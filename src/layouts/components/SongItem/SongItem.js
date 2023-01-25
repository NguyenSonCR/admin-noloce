import styles from './SongItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SongItem() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <audio
                    controls
                    src="https://mp3-320s1-zmp3.zmdcdn.me/fcc55768142cfd72a43d/2174686131581662256?authen=exp=1673891545~acl=/fcc55768142cfd72a43d/*~hmac=f9f3e7621da41ae70b5203529442fa72&fs=MTY3MzmUsICxODmUsIC0NTEyNXx3ZWJWNnwxMDQwMzA2MjQ4fDE0LjE3NC4xNi4xMDI"
                ></audio>
            </div>
        </div>
    );
}

export default SongItem;
