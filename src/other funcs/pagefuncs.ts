export const setTitle = (title: string) => {
    document.title = title;
}

export const setFavicon = (iconUrl: string) => {
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = iconUrl;
}