import React , {Component}from 'react';
import './App.css';
import MainLayout from './components/layouts/Main';
class App  extends  Component {

    render() {
        return(
            <MainLayout
                titleSection="title"
                sectionContent="section "
            >
                text
            </MainLayout>
        )
    }
}

export default App;
