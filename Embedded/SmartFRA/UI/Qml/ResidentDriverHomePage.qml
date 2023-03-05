import QtQuick 2.15
import QtQuick.Window 2.15
import QtQuick.VirtualKeyboard 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts

ApplicationWindow {
    id: residentDriverHomePage
    width: 1024
    height: 600
    visible: true
    title: qsTr("SmartFRA W")
    flags: Qt.FramelessWindowHint
    x: Screen.width / 2 - width / 2
    y: Screen.height / 2 - height / 2


    Item {
        FontLoader {
            id: fraBold
            source: "qrc:/fonts/bold.ttf"
        }

        FontLoader {
            id: fraRegular
            source: "qrc:/fonts/regular.ttf"
        }

        Label {
            Layout.alignment: Qt.AlignCenter
            text: "¿Cómo ingresaremos?"
            font.family: fraBold.font.family
            font.pixelSize: 20
            font.bold: true
            font.weight: 400
            color: '#D9D9D9'
        }
    }



    Image {
        id: background
        anchors.fill: parent
        source: "qrc:/images/background.png"
        z: -1
    }
}
