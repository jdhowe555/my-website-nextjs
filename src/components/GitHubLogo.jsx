import Logo from '@/assets/github-mark.svg';

export default function GitHubLogo({ size = 25, link = "https://github.com/jdhowe555"}) {
    return (
        <div style={{width: `${size}px`, height: `${size}px`, display: 'flex'}}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Logo style={{width: '100%', height: '100%'}}/>
            </a>
        </div>
);
};
