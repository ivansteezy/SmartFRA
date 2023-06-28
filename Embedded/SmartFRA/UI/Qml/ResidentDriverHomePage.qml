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
    }

    Image {
        id: background
        anchors.fill: parent
        source: "qrc:/images/driver-page.png"
        z: -1
    }

    Button {
        id: startRecognition
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.top: parent.top
        anchors.topMargin: 500
        contentItem: Text {
            text: "Identificate!"
            color: "#FFFFFF"
            font.family: fraRegular.font.family
            font.pixelSize: 18
            horizontalAlignment: Text.AlignHCenter
            verticalAlignment: Text.AlignVCenter
        }

        background: Rectangle {
            implicitWidth: 300
            implicitHeight: 40
            color: walkingResidentButton.down ? "#084f70" : "#05364D"
            radius: 5
        }
    }
}
