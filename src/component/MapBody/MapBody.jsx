import React, {useState} from 'react';
import s from './MapBody.module.css';
import 'antd/dist/antd.css';
import 'ol/ol.css';
import 'antd/dist/antd.css';
import './react-geo.css';

import ol from 'openlayers';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlLayerGroup from 'ol/layer/Group';
import XYZ from 'ol/source/XYZ';
import {
    Drawer, Button
} from 'antd';
import {
    MapComponent,
    DigitizeButton,
    MeasureButton,
    LayerTree,
    SimpleButton
} from "@terrestris/react-geo";

const layerGroup = new OlLayerGroup({
    name: 'OSM Layers Group',
    layers: [
        new OlLayerTile({
            source: new OlSourceOsm(),
            name: 'OSM'
        }),
        new OlLayerTile({
            name: 'OSM-Overlay-WMS',
            minResolution: 0,
            maxResolution: 200,
            source: new OlSourceTileWMS({
                url: 'https://ows.terrestris.de/osm/service',
                params: {
                    'LAYERS': 'OSM-Overlay-WMS'
                }
            })
        }),
        new OlLayerTile({
            name: 'RB',
            source: new OlSourceTileWMS({
                url: 'http://localhost:8080/geoserver/cite/wms',
                params: {
                    'LAYERS': 'cite:dist2'
                }
            })
        })
    ]
});

const map = new OlMap({
    view: new OlView({
        center: ol.proj.fromLonLat([55.9772, 54.7334]),
        zoom: 7,
    }),
    layers: [
        new OlLayerTile({
            name: 'Yandex',
            source: new XYZ({
                url: 'http://vec02.maps.yandex.net/tiles?l=map&v=4.55.2&z={z}&x={x}&y={y}&scale=2&lang=ru_RU'
            })
        }),
        layerGroup
    ]
});

const MapBody = () => {
    const [visible, setVisible] = useState(false);

    const toggleDrawer = () => {
        setVisible(!visible);
    }

    return (
        <div className={s.mapContent}>
            <MapComponent className={s.map} map={map} />
            <SimpleButton
                type='primary'
                style={{position: 'fixed', top: '70px', right: '30px'}}
                onClick={toggleDrawer}
                icon="bars">
            </SimpleButton>
            <Drawer
                title="Navigation"
                placement="right"
                onClose={toggleDrawer}
                visible={visible}
                mask={false}>

                <DigitizeButton
                    name="drawPoint"
                    map={map}
                    drawType="Point"
                    icon="pencil">
                    &nbsp; Draw Point
                </DigitizeButton>

                <MeasureButton
                    key="measureButton"
                    name="poly"
                    map={map}
                    measureType="polygon"
                    icon="pencil">
                    &nbsp; Измерить площадь
                </MeasureButton>

                <DigitizeButton
                    name="selectAndModify"
                    map={map}
                    editType="Edit"
                    icon="pencil">
                    &nbsp; Редактирование
                </DigitizeButton>

                <LayerTree map={map} />
            </Drawer>
        </div>
    )
}

export default MapBody;