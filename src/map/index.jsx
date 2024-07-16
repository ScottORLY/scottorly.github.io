
import { geoPath, geoMercator } from 'd3-geo'
import { selectAll  } from 'd3-selection'
import { feature } from 'topojson-client'
import features from './ne_10m_time_zones.json'
import land from './land-10m.json'

const createMap = () => {
    const lands = feature(land, land.objects.land)
    const tzs = feature(features, features.objects.ne_10m_time_zones)
    const path = geoPath(geoMercator().fitExtent([[0, 40], [620, 420]], lands).scale(100))
    const tzPath =  geoPath(geoMercator().fitExtent([[0, 40], [620, 420]], tzs).scale(100))
    const g = selectAll('#map')

    g.selectAll('path')
        .data(lands.features)
        .join(
            enter => enter.append(d => (<path
                    className='mapPath'
                    d={path(d)}
                />)
            )
        )
    selectAll('#tz')
        .selectAll('path')
        .data(tzs.features, d => {
           return d.properties.cartodb_id
        })
        .join(
            enter => enter.append(d => (<path
                    className='mapPath'
                    d={tzPath(d)}
                />
            ))
        )
}

export default createMap
