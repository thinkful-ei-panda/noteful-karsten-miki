import React from 'react';
import { NavLink, withRouter} from 'react-router-dom';
import NotefulContext from './NotefulContext';

function MainViewSideBar() {
    return (
        <NotefulContext.Consumer>
            {value => {
                const folders = value.STORE.folders.map(folder => 
                    <li key={folder.id}><NavLink to={`/folder/${folder.id}`}>{folder.name}</NavLink></li>
                )
                
                return (
                    <section className="border group-column item">
                        <ul>
                            {folders}
                            <li><NavLink to='/addFolderView'>Add Folder</NavLink></li>
                        </ul>
                    </section>
                )
            }}          
        </NotefulContext.Consumer>
    );
};

export default withRouter(MainViewSideBar);