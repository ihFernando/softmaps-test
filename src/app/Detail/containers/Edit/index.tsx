import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { ApplicationState } from '../../../../store/configureStore'

import * as DetailActions from '../../actions'

import Header from '@softmaps/components/Header'
import EditScreen from '@softmaps/components/screens/Edit'

const EditContainer = ({ detail, getDetailRequest, editDetail }) => {
  const { data, loading, error } = detail
  const { id } = useParams<{ id: string }>()
  const redirectTo = `/detalhe/${id}`

  useEffect(() => {
    if (!data.currentDetail) {
      getDetailRequest(id)
    }
  }, [id])

  return (
    <>
      <Header backTo={redirectTo} />

      <EditScreen
        currentCountry={data?.currentDetail}
        redirectTo={redirectTo}
        loading={loading}
        error={error}
        onSumbit={e => editDetail(e)}
      />
    </>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  detail: state.detail
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(DetailActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer)
