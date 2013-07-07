Ext.define('AccordionListExample.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.SegmentedButton',
        'Ext.ux.AccordionList',
        'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                xtype: 'titlebar',
                title: 'Accordion List Example',
                docked: 'top'
            },
            {
                title: 'Simple',
                iconCls: 'list',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'toolbar',
                        items: [
                            {
                                xtype: 'segmentedbutton',
                                centered: true,
                                items: [
                                    {
                                        text: 'Expand',
                                        action: 'expand'
                                    },
                                    {
                                        text: 'Collapse',
                                        action: 'collapse'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'accordionlist',
                        store: Ext.create('AccordionListExample.store.Task'),
                        flex: 1,
                        itemId: 'task',
                        listeners: {
                            initialize: function() {
                                this.load();
                            }
                        }
                    }
                ],
                control: {
                    'button[action=expand]': {
                        tap: function() {
                            this.down('accordionlist').doAllExpand();
                        }
                    },
                     'button[action=collapse]': {
                        tap: function() {
                            this.down('accordionlist').doAllCollapse();
                        }
                    }
                }
            },
            {
                title: 'Decorate',
                iconCls: 'star',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'toolbar',
                        items: [
                            {
                                xtype: 'segmentedbutton',
                                centered: true,
                                items: [
                                    {
                                        text: 'Expand',
                                        action: 'expand'
                                    },
                                    {
                                        text: 'Collapse',
                                        action: 'collapse'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'accordionlist',
                        store: Ext.create('AccordionListExample.store.Task'),
                        flex: 1,
                        itemId: 'task',
                        singleMode: true,
                        animation: true,
                        animationDuration: 300,
                        showCount: true,
                        listeners: {
                            initialize: function() {
                                this.load();
                            }
                        }
                    }
                ],
                control: {
                    'button[action=expand]': {
                        tap: function() {
                            this.down('accordionlist').doAllExpand();
                        }
                    },
                     'button[action=collapse]': {
                        tap: function() {
                            this.down('accordionlist').doAllCollapse();
                        }
                    }
                }
            },
            {
                title: 'Nested',
                iconCls: 'chart',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'toolbar',
                        items: [
                            {
                                xtype: 'segmentedbutton',
                                centered: true,
                                items: [
                                    {
                                        text: 'Expand',
                                        action: 'expand'
                                    },
                                    {
                                        text: 'Collapse',
                                        action: 'collapse'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'accordionlist',
                        store: Ext.create('AccordionListExample.store.PL'),
                        headerItemTpl: [
                            '<tpl if="this.isExpanded(values)">',
                                '<div class="down"></div>',
                                '<div <tpl if="values.year">style="font-style:italic;"</tpl>>',
                                '{text}</div>',
                            '<tpl else>',
                                '<div class="right"></div>',
                                '<div <tpl if="values.year">style="font-style:italic;"</tpl>>',
                                '{text}</div>',
                            '</tpl>'
                        ].join(''),
                        contentItemTpl: [
                            '<div style="display:-webkit-box;width:100%;text-align:right;">',
                                '<div style="width:20%;"></div>',
                                '<div style="-webkit-box-flex:1;color:#157fcc;">${sales}</div>',
                                '<div style="-webkit-box-flex:1;color:red;">${expenses}</div>',
                                '<div style="-webkit-box-flex:1;color:green;">${profits}</div>',
                            '</div>'
                        ].join(''),
                        useSelectedHighlights: false,
                        showCount: true,
                        animation: true,
                        animationDuration: 300,
                        flex: 1,
                        itemId: 'PL',
                        listeners: {
                            initialize: function() {
                                this.load();
                                this.addCls('PL-view');
                            }
                        }
                    }
                ],
                control: {
                    'button[action=expand]': {
                        tap: function() {
                            this.down('accordionlist').doAllExpand();
                        }
                    },
                     'button[action=collapse]': {
                        tap: function() {
                            this.down('accordionlist').doAllCollapse();
                        }
                    }
                }
            },
            {
                title: 'Paging',
                iconCls: 'bird',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'accordionlist',
                        store: Ext.create('AccordionListExample.store.BigTask'),
                        listConfig: {
                            plugins: [
                                {
                                    xclass: 'Ext.plugin.ListPaging',
                                    autoPaging: true
                                },
                                {
                                    xclass: 'Ext.plugin.PullRefresh',
                                    pullRefreshText: 'Pull down for more data!'
                                }
                            ]
                        },
                        flex: 1,
                        itemId: 'task',
                        listeners: {
                            initialize: function() {
                                this.load();
                            }
                        }
                    }
                ],
                control: {
                    'button[action=expand]': {
                        tap: function() {
                            this.down('accordionlist').doAllExpand();
                        }
                    },
                     'button[action=collapse]': {
                        tap: function() {
                            this.down('accordionlist').doAllCollapse();
                        }
                    }
                }
            },
            {
                title: 'AsyncLoad',
                iconCls: 'team',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'accordionlist',
                        store: Ext.create('AccordionListExample.store.AsyncTask'),
                        flex: 1,
                        itemId: 'task',
                        asyncLoad:true,
                        listeners: {
                            initialize: function() {
                                this.load();
                            }
                        }
                    }
                ],
                control: {
                    'button[action=expand]': {
                        tap: function() {
                            this.down('accordionlist').doAllExpand();
                        }
                    },
                     'button[action=collapse]': {
                        tap: function() {
                            this.down('accordionlist').doAllCollapse();
                        }
                    }
                }
            }
        ]
    }
});
