import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import 'moment/locale/ru';


const mapStateToProps = ({ Language }) => ({
    currentLang: Language.current,
});

export const ContentContext = React.createContext(null);

@inject(mapStateToProps)
@observer
class LanguageProvider extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        currentLang: PropTypes.string.isRequired,
    };

    render() {
        const { children, currentLang } = this.props;
        const dictionary = require(`@core/dictionary/${currentLang}.json`);

        return (
            <ContentContext.Provider value={dictionary}>
                {children}
            </ContentContext.Provider>
        );
    }
}

export default LanguageProvider;
