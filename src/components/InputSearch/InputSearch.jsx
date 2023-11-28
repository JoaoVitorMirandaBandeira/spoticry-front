import { ContanerSearch, SearchButton, SearchInput } from "./Style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const InputSearch = (props) => {
    return (
        <ContanerSearch>
            <SearchInput placeholder={props.placeholder}/>
            <SearchButton>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchButton>
        </ContanerSearch>
    )
}

export default InputSearch