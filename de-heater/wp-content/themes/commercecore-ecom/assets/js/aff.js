(function () {
	function getCookie(key, defaultValue = null) {
		const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
			const [cookieKey, cookieValue] = cookie.split('=');
			acc[decodeURIComponent(cookieKey)] = decodeURIComponent(cookieValue);
			return acc;
		}, {});

		return cookies.hasOwnProperty(key) ? cookies[key] : defaultValue;
	}

	function setCookie(key, value, expirationInSeconds, path = '/') {
		const expires = new Date(Date.now() + expirationInSeconds * 1000).toUTCString();
		document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
	}

	function encodeAffiliateParams(affiliate, entryUrl, affiliateOverwrite) {
		return {
			aff: window.btoa(affiliate),
			entryUrl: window.btoa(entryUrl),
			affiliateOverwrite: window.btoa(affiliateOverwrite),
		};
	}

	function isValidUrl(url) {
		return (
			typeof url === 'string' &&
			url.includes(location.hostname) &&
			!url.includes('legal') &&
			!url.includes('wp-login') &&
			!url.includes('wp-admin')
		);
	}

	function appendAffiliateParams(url, { aff, entryUrl, affiliateOverwrite }) {
		const separator = url.includes('?') ? '&' : '?';

		const affOverwritePart =
			affiliateOverwrite != null && affiliateOverwrite !== ''
				? `&affOverwrite=${encodeURIComponent(affiliateOverwrite)}`
				: '';

		return `${url}${separator}aff=${encodeURIComponent(aff)}${affOverwritePart}&entryUrl=${encodeURIComponent(
			entryUrl
		)}`;
	}
	function addAffiliateParamToLinks() {
		if (!window.affiliate) return;

		const links = [...document.getElementsByTagName('a')];
		const encodedAffiliate = encodeAffiliateParams(window.affiliate, window.entry_url, window.affiliateOverwrite);

		links.forEach((link) => {
			let url = link.getAttribute('href')?.trim();

			if (!isValidUrl(url)) return;

			link.setAttribute('href', appendAffiliateParams(url, encodedAffiliate));
		});
	}

	function decodeQueryParam(param) {
		const value = new URLSearchParams(location.search).get(param);
		return value ? window.atob(decodeURIComponent(value)) : null;
	}

	function initEntryUrl() {
		const entryUrlFromCookie = getCookie('entrypoint_url');
		const entryUrlFromParams = decodeQueryParam('entryUrl');

		window.entry_url = entryUrlFromCookie || entryUrlFromParams || location.pathname;

		if (!entryUrlFromCookie) {
			setCookie('entrypoint_url', window.entry_url, 60 * 25); // 25 minutes
		}
	}

	function initGoogleTrackingParams() {
		const googleTrackingParams = ['gclid', 'gbraid', 'wbraid'];

		googleTrackingParams.forEach((param) => {
			const valueFromCookie = getCookie(param);
			const valueFromUrlParam = new URLSearchParams(location.search).get(param);
			const paramValue = valueFromCookie || valueFromUrlParam;

			if (!paramValue) return;

			window[`${param}`] = paramValue;

			if (!valueFromCookie) {
				setCookie(`${param}`, paramValue, 86400 * 30);
			}
		});
	}

	function initAffiliateTag() {
		const { direct, productPack } = info;

		const currentAffCookie = getCookie('affiliate_tag');
		const affFromParams = decodeQueryParam('aff');
		const affiliateOverwrite = decodeQueryParam('affOverwrite') ?? null;
		window.affiliate = productPack || affFromParams || currentAffCookie || direct;

		if (productPack !== affFromParams && !affiliateOverwrite) {
			window.affiliateOverwrite = affFromParams;
			setCookie('affiliate_overwrite', window.affiliateOverwrite, 86400 * 30);
		}

		if (affiliateOverwrite !== null) {
			window.affiliateOverwrite = affiliateOverwrite;
			setCookie('affiliate_overwrite', window.affiliateOverwrite, 86400 * 30);
		}

		setCookie('affiliate_tag', window.affiliate, 86400 * 30); // 30 days
	}

	document.addEventListener('DOMContentLoaded', () => {
		initEntryUrl();
		initAffiliateTag();
		addAffiliateParamToLinks();
		initGoogleTrackingParams();

		console.log('Entry URL: ', window.entry_url);
		console.log('Affiliate: ', window.affiliate);
	});
})();
