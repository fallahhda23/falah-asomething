var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_pasirkaliki_1 = new ol.format.GeoJSON();
var features_pasirkaliki_1 = format_pasirkaliki_1.readFeatures(json_pasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasirkaliki_1.addFeatures(features_pasirkaliki_1);
var lyr_pasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pasirkaliki_1, 
                style: style_pasirkaliki_1,
                popuplayertitle: "pasir kaliki",
                interactive: true,
                title: '<img src="styles/legend/pasirkaliki_1.png" /> pasir kaliki'
            });
var format_Kawasanpenyebaranjentik_2 = new ol.format.GeoJSON();
var features_Kawasanpenyebaranjentik_2 = format_Kawasanpenyebaranjentik_2.readFeatures(json_Kawasanpenyebaranjentik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kawasanpenyebaranjentik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kawasanpenyebaranjentik_2.addFeatures(features_Kawasanpenyebaranjentik_2);
var lyr_Kawasanpenyebaranjentik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kawasanpenyebaranjentik_2, 
                style: style_Kawasanpenyebaranjentik_2,
                popuplayertitle: "Kawasan penyebaran jentik",
                interactive: true,
                title: '<img src="styles/legend/Kawasanpenyebaranjentik_2.png" /> Kawasan penyebaran jentik'
            });
var format_Titikjentik_3 = new ol.format.GeoJSON();
var features_Titikjentik_3 = format_Titikjentik_3.readFeatures(json_Titikjentik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titikjentik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titikjentik_3.addFeatures(features_Titikjentik_3);
var lyr_Titikjentik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titikjentik_3, 
                style: style_Titikjentik_3,
                popuplayertitle: "Titik jentik",
                interactive: true,
                title: '<img src="styles/legend/Titikjentik_3.png" /> Titik jentik'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_pasirkaliki_1.setVisible(true);lyr_Kawasanpenyebaranjentik_2.setVisible(true);lyr_Titikjentik_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_pasirkaliki_1,lyr_Kawasanpenyebaranjentik_2,lyr_Titikjentik_3];
lyr_pasirkaliki_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Kawasanpenyebaranjentik_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Titikjentik_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_pasirkaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Kawasanpenyebaranjentik_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Titikjentik_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_pasirkaliki_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Kawasanpenyebaranjentik_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Titikjentik_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Titikjentik_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});