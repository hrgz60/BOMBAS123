var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Estacionesgasolina_1 = new ol.format.GeoJSON();
var features_Estacionesgasolina_1 = format_Estacionesgasolina_1.readFeatures(json_Estacionesgasolina_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estacionesgasolina_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estacionesgasolina_1.addFeatures(features_Estacionesgasolina_1);
var lyr_Estacionesgasolina_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estacionesgasolina_1, 
                style: style_Estacionesgasolina_1,
                interactive: true,
                title: '<img src="styles/legend/Estacionesgasolina_1.png" /> Estaciones gasolina'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Estacionesgasolina_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Estacionesgasolina_1];
lyr_Estacionesgasolina_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'estacion': 'estacion', });
lyr_Estacionesgasolina_1.set('fieldImages', {'qc_id': '', 'id': '', 'estacion': '', });
lyr_Estacionesgasolina_1.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'estacion': 'no label', });
lyr_Estacionesgasolina_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});