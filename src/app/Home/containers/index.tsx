import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ApplicationState } from '../../../store/configureStore'

import * as HomeActions from '../actions'

import Header from '@softmaps/components/Header'
import HomeScreen from '@softmaps/components/screens/Home'

const HomeContainer = ({ home, getCountryRequest }) => {
  const { data, loading, error } = home

  return (
    <>
      <Header backTo="/" />

      <HomeScreen
        loading={loading}
        error={error}
        data={data}
        onSearch={getCountryRequest}
      />
    </>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  home: state.home
})

const mapDispatchToProps = dispatch => bindActionCreators(HomeActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
