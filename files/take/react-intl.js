

<FormattedMessage id='desktop.saleCard.noMainContact'>
	{message =>
		<Input placeholder={message}/>
	}
</FormattedMessage>

<FormattedMessage id='desktop.saleCard.lastActivityShort' />





//------------------------------------------------------
// USED IN JS
// ./src/utils/getTranslations.js
//------------------------------------------------------

import { useContext } from 'react';
import { IsLanguageContext } from 'crm-components/common/LanguageContextProvider/LanguageContextProvider';
import { flattenMessages } from 'crm-i18n/utils';
import translations from 'crm-i18n/locales';

export const getTranslations = name => {
    const { locale } = useContext(IsLanguageContext);

    return flattenMessages(translations[locale])[name];
};


import { getTranslations } from 'crm-utils/getTranslations';
const NO_DATE_PLACEHOLDER = getTranslations('login.header');


//------------------------------------------------------
// USED IN JS
//------------------------------------------------------
import { FormattedMessage } from 'react-intl';

const data = (
	<FormattedMessage id='login.header'>
		{message => message}
	</FormattedMessage>
);
	

//------------------------------------------------------
// USED IN JSX
//------------------------------------------------------
import { FormattedMessage } from 'react-intl';

<Typography>
	<FormattedMessage
		id='login.header'
		defaultMessage='Вход в систему'
	/>
</Typography>


<FormattedMessage id='desktop.filters.search'>
	{message =>
		<Input placeholder={message}/>
	}
</FormattedMessage>





//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++

injectIntl             =>
defineMessages         =>
IntlProvider           => <IntlProvider defaultLocale='' locale='' messages=''></IntlProvider>
FormattedDate          => 
FormattedTime          => 
FormattedRelativeTime  => 
FormattedNumber        =>
FormattedPlural        =>
FormattedMessage       => <FormattedMessage id='' defaultMessage='' />  
FormattedHTMLMessage   => 


//------------------------------------------------------
// index.js
//------------------------------------------------------

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import { flattenMessages } from './src/i18n/utils';
import translations from './src/i18n/locales';

addLocaleData([...en, ...ru]);

const language = navigator.language.split(/[-_]/)[0];


const App = () => (
	<IntlProvider
		defaultLocale='ru'
		locale={language}
		messages={flattenMessages(translations[language])}
	>
		<Components />
	</IntlProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

//------------------------------------------------------
// ./src/i18n/utils
//------------------------------------------------------
export function flattenMessages(nestedMessages = '', prefix = '') {
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            messages[prefixedKey] = value;
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }

        return messages;
    }, {});
}

//------------------------------------------------------
// ./src/i18n/locales
//------------------------------------------------------
import en from './translations/en.json';
import ru from './translations/ru.json';

export default { en, ru };

//------------------------------------------------------
// ./src/i18n/translations/en.json
//------------------------------------------------------
{
    "login": {
        "header": "Log in system"
    }
}

//------------------------------------------------------
// ./src/i18n/translations/ru.json
//------------------------------------------------------
{
    "login": {
        "header": "Вход в систему"
    }
}
