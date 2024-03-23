import Logo from '@/assets/github-mark.svg';

export default function GitHubLogo({ size = 25}) {
    return (
        <div style={{ width: `${size}px`, height: `${size}px`, display: 'flex' }}>
            <Logo style={{ width: '100%', height: '100%' }}/>
        </div>
    );
};
