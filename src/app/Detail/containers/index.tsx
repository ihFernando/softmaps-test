import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { ApplicationState } from '../../../store/configureStore'

import * as DetailActions from '../actions'

import Header from '@softmaps/components/Header'
import DetailScreen from '@softmaps/components/screens/Detail'

const DetailContainer = ({ detail, lastFiveCountries, getDetailRequest }) => {
  const { data, loading, error } = detail
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (data?.currentDetail?.code !== id) {
      getDetailRequest(id)
    }
  }, [id])

  return (
    <>
      <Header backTo="/" />

      <DetailScreen
        loading={loading}
        error={error}
        currentCountry={data.currentDetail}
        recentlyCountries={lastFiveCountries}
      />
    </>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  detail: state.detail,
  lastFiveCountries: state.home.data.lastFiveCountries
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(DetailActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer)
