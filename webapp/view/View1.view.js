sap.ui.jsview("tema2.view.View1", {
    getControllerName: function() {
        return "tema2.controller.View1"
    },

    createContent: function(oController) {
        return new sap.m.Shell(this.createId("shell"), {
            app: new sap.m.App(this.createId("app"), {
                pages: new sap.m.Page(this.createId("page"), {
                    title: "{i18n>title}",
                    content:[
                        new sap.m.VBox(this.createId("vBoxTabel"), {
                            items: [
                                new sap.m.HBox({
                                    alignItems: sap.m.FlexAlignItems.Center,
                                    items: [
                                        new sap.m.Label({
                                            text: "{i18n>SORT:}"
                                        }),
                                        new sap.m.Label({
                                            text: "{i18n>COLUMN}"
                                        }).addStyleClass("sapUiMediumMarginBegin"),
                                        new sap.m.ComboBox(this.createId("columnsComboBox1"), {
                                            items: {
                                                path: "/columns",
                                                template: new sap.ui.core.Item({
                                                    text: "{Name}"
                                                })
                                            }
                                        }),
                                        new sap.m.Label({
                                            text: "{i18n>ASCENDING}"
                                        }).addStyleClass("sapUiMediumMarginBegin"),
                                        new sap.m.CheckBox(this.createId("ascendingCheckBox"), {
                                            select: (e) => {}
                                        })
                                    ]
                                }),
                                new sap.m.HBox({
                                    alignItems: sap.m.FlexAlignItems.Center,
                                    items: [
                                        new sap.m.Label({
                                            text: "{i18n>FILTER:}"
                                        }),
                                        new sap.m.Label({
                                            text: "{i18n>COLUMN}"
                                        }).addStyleClass("sapUiMediumMarginBegin"),
                                        new sap.m.ComboBox(this.createId("columnsComboBox2"), {
                                            items: {
                                                path: "/columns",
                                                template: new sap.ui.core.Item({
                                                    text: "{Name}"
                                                }),
                                            },
                                            change: oController.onComboBoxItemForFilterSelected.bind(oController)
                                        }),
                                        new sap.m.Label({
                                            text: "{i18n>OPERATOR}"
                                        }).addStyleClass("sapUiMediumMarginBegin"),
                                        new sap.m.ComboBox(this.createId("operatorComboBox"), {
                                            change: oController.onOperatorSelected.bind(oController)
                                        }).addStyleClass("sapUiMediumMarginEnd"),
                                        new sap.m.HBox(this.createId("inputHBox"))
                                    ]
                                }),
                        
                                new sap.m.HBox({
                                    items: [
                                        new sap.m.Button({
                                            text: "{i18n>GO}",
                                            icon: "sap-icon://chevron-phase",
                                            press: oController.onGoPress.bind(oController)
                                        })
                                    ]
                                })
                            ]
                        }), 
                    ]
                })
            })
        })
    }
})
