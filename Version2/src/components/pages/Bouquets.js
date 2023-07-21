import './Bouquets.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pink_lemonade from '../../images/pink_lemonade.webp'
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import {data} from '../bouquets_data';
import Bouquet from '../bouquets_card';
import Facet_container from '../facet_container';

export default function Bouquets(){
  const build_categorical_facet_values = (name) => {
    const values = [... new Set(data.map(item => item[name]))]
    return values.map(value => ({'name':value, 'checked': false}))
  }

  const [state, setState] = useState({
    all_bouquets: data,
    shown_bouquets: data,
    facets: {
      Color: build_categorical_facet_values('Color'),
      // category: build_categorical_facet_values('category')
    }
  })
  useEffect(() => {
    const facets = {}
    // Get all the facet values that are true/active/selected.
    Object.entries(state.facets).forEach(([name, values]) => {
      facets[name] = []
      values.forEach(value => {
        if (value.checked) {
          facets[name].push(value.name)
        }
      })
    })

    // If there are no facets selected, show all clothes
    if (Object.values(facets).every(arr => arr.length === 0)) {
      setState({ ...state, shown_bouquets: state.all_bouquets })
      return
    }

    // Getting the number of active facet (Not facet_values)
    const number_of_active_facets = Object.values(facets).filter(x => x.length).length

    // Double loop through all clothes and all active facets
    // Keep only the clothes that match the active facets
    const to_show = state.all_bouquets.map(bouquet =>
      Object.entries(facets).map(([name, values]) =>
        values.includes(bouquet[name])).filter(Boolean).length == number_of_active_facets ? bouquet : undefined
    ).filter(Boolean)

    setState({ ...state, shown_bouquets: to_show })
  }, [state.facets])

  function clearAllFacetValues(facet){
    const new_facet = state.facets[facet].map(facet_value => ({
      ...facet_value, checked:false
    }))
    console.log(new_facet)
    setState({...state, facets:{...state.facets, [facet]: new_facet}})
  }
function updateCategory(facet, value, newChecked){
  const new_facet = state.facets[facet].map(({name, checked}) => ({name:name, checked:name == value ? newChecked: checked}))
  setState({...state, facets: {...state.facets, [facet]: new_facet}})
}

    return <div className="bouquetSection">
        <h2>Life is too short to not buy flowers.</h2>
    <h1>Our collection</h1>
    <Row>
        <Col className='border-end' md={3}>
          <Facet_container facets={state.facets} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
        </Col>
        <Col xs={9}>
          <Container className='d-flex flex-wrap'>
            {state.shown_bouquets.map(x => <Bouquet {...x} />)}
          </Container>
        </Col>
      </Row>
    </div>
}