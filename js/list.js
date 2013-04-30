function showUrl(value){
                return "<a href='" + value + "' target='_blank'>" + value + "</a>";
            }
            
            function showEmail(value){
                return "<a href='mailto:" + value + "'>" + value + "</a>";
            }
            
            Ext.onReady(function(){
                // 表格中的数据存储
                var store = new Ext.data.JsonStore({
                    url: "list_json.php",
                    root: "results",
                    totalProperty: 'total',//这里从url返回结果中读取记录总数
                    fields: ["id", "no", "name", "sex", "city", "phone", "qq", "work", "email", "comment"]
                });
                
                // 表格的第一列的复选框
                var sm = new Ext.grid.CheckboxSelectionModel({//复选框申明
                    header: " ",
                    sortable: true,
                    width: 20
                });
                
                // 表格的列信息
                var colM = new Ext.grid.ColumnModel([
                sm, 
                {
                    header: "Id",
                    dataIndex: "id",
                    sortable: true,
                    width: 30
                }, 
                {
                    header: "学号",
                    dataIndex: "no",
                    sortable: true,
                    width: 60
                }, 
                {
                    header: "姓名",
                    dataIndex: "name",
                    sortable: true,
                    width: 40
                },
                {
                    header: "性别",
                    dataIndex: "sex",
                    sortable: true,
                    width: 30
                },
                {
                    header: "城市",
                    dataIndex: "city",
                    sortable: true,
                    width: 150
                }, 
                {
                    header: "手机号",
                    dataIndex: "phone",
                    sortable: true,
                    width: 60
                },
                {
                    header: "QQ",
                    dataIndex: "qq",
                    sortable: true,
                    width: 60
                
                },
                {
                    header: "工作单位",
                    dataIndex: "work",
                    sortable: true,
                    width: 150
                },
                {
                    header: "邮箱",
                    dataIndex: "email",
                    sortable: true,
                    renderer: showEmail,
                    width: 120
                },                
                {
                    header: "备注",
                    dataIndex: "comment",
                    sortable: true,
                    /*renderer: function(value, meta, record) {
                        meta.attr = 'style="white-space:normal;"';
                        return value;
                    }*/


                }]);
                Ext.QuickTips.init();//开启表单提示
                // Ext.form.Field.prototype.msgTarget = 'side';//设置提示信息位置为边上
                
                // 搜索表单
                var search_pannel = new Ext.FormPanel({
                    height: 20,
                    labelWidth: 70,
                    baseCls: 'x-plain',
                    defaults: {
                        width: 70,
                        height: 10
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: '请输入姓名',
                        id: 'title',
                        name: 'title',
                        allowBlank: false,//禁止为空
                        blankText: '搜索内容不能为空'
                    }]
                });
                var tb_text = new Ext.Toolbar.TextItem("&nbsp;&nbsp;&nbsp;");//创建一个空白区域
                var grid = new Ext.grid.GridPanel({
                    split: true,
                    //title: "通信录",
                    height: 420,
                    region: 'north',
                    cm: colM,
                    loadMask: true,
                    store: store,
                    viewConfig: {
                        forceFit: true
                    },
                    sm: new Ext.grid.RowSelectionModel({singleSelect: true})    // 单选模式
                    // autoExpandColumn: 10,//这里指定扩充
                    // clicksToEdit: 1,
                    
                    /*
                    bbar: new Ext.PagingToolbar({
                        pageSize: 25,
                        store: store,
                        displayInfo: true,
                        displayMsg: '当前 {0} 到 {1} 共 {2}',
                        emptyMsg: "没有数据返回",
                        items: null
                    })*/
                });
                /*var select_kind = new Ext.data.JsonStore({
                    url: "kind_data.js",
                    fields: ['name', 'value'],
                    totalProperty: "total",
                    root: "result",
                    id: "name"
                });*/
                
                function _add(){//显示选择行
                    Ext.form.Field.prototype.msgTarget = 'side';//设置提示信息位置为边上
                    var window_form_add = new Ext.FormPanel({//初始化表单面板
                        id: 'window_form_add',
                        name: 'window_form_add',
                        labelWidth: 60, // 默认标签宽度板
                        labelAlign: 'right',
                        baseCls: 'x-plain',//不设置该值，表单将保持原样，设置后表单与窗体完全融合（-_-!!，说不清了，大家可以去掉运行下看看）
                        bodyStyle: 'padding:5px 5px 0',
                        width: 350,
                        frame: true,
                        //border: false,
                        defaults: {
                            width: 320,
                            height: 260
                        },
                        defaultType: 'textfield',//默认字段类型
                        items: [{
                            xtype: 'fieldset',
                            title: '名片信息',
                            defaults: {
                                xtype: 'textfield',
                                width: 200
                            },
                            items: [{
                                name: 'name',
                                fieldLabel: '姓名',
                                allowBlank: false,
                                blankText: '姓名不能为空'
                            }, {
                                name: 'tell',
                                fieldLabel: '手机号码',
                                allowBlank: false,
                                blankText: '手机号码不能为空'
                            }, {
                                name: 'qq',
                                fieldLabel: 'QQ',
                                allowBlank: false,
                                blankText: 'QQ号码不能为空'
                            }, {
                                name: 'email',
                                fieldLabel: '邮箱',
                                allowBlank: false,
                                blankText: '添加者邮箱不能为空',
                                vtype: 'email',
                                emailText: 'Email格式不正确'
                            }, {
                                name: 'school',
                                fieldLabel: '毕业学校',
                                allowBlank: false,
                                blankText: '毕业院校不能为空'
                            }, {
                                name: 'spec',
                                fieldLabel: '专业',
                                allowBlank: false,
                                blankText: '专业不能为空'
                            }, {
                                name: 'home',
                                fieldLabel: '家庭地址',
                                allowBlank: false,
                                blankText: '家庭地址不能为空'
                            }, {
                                name: 'hometell',
                                fieldLabel: '家庭电话',
                                allowBlank: false,
                                blankText: '家庭电话不能为空'
                            }, {
                                name: 'work',
                                fieldLabel: '工作单位'
                            }]
                        }],
                        buttons: [{
                            text: '确定',
                            handler: function(){//添加网站
                                if (add_widow.getComponent('window_form_add').form.isValid()) {
                                    add_widow.getComponent('window_form_add').form.submit({
                                        waitTitle: '请稍候',
                                        waitMsg: '正在提交数据,请稍候....',
                                        url: '_action.php?action=add',
                                        method: 'POST',
                                        success: function(form, action){
                                            var Result = action.result.success;
                                            if (Result == false) {
                                                Ext.MessageBox.alert('提示', action.result.message);
                                            }
                                            else 
                                                if (Result == true) {
                                                    Ext.MessageBox.alert('提示', action.result.message);
                                                    window_form_add.form.reset();
                                                    store.load({
                                                        params: {
                                                            start: 0,
                                                            limit: 30
                                                        }
                                                    });
                                                }
                                        },
                                        failure: function(form, action){
                                            Ext.MessageBox.alert('提示', action.result.message);
                                            window_form_add.form.reset();
                                        }
                                        
                                    })
                                }
                            }
                        }, {
                            text: '取消',
                            handler: function(){
                                window_form.form.reset();
                            }
                        }]
                    });
                    var add_widow = new Ext.Window({
                        title: "添加名片",
                        width: 350,
                        height: 350,
                        modal: true,
                        maximizable: true,
                        items: window_form_add
                    });
                    add_widow.show();   
                }
                
                function edit()
                {
                    window.location.href = "edit.php";
                }
                
                function _edit(){//显示选择行
                    var rows = grid.getSelectionModel().getSelections();
                    if (rows) {                     
                        for (var i = 0; i < rows.length; i++) {
                            Ext.form.Field.prototype.msgTarget = 'side';//设置提示信息位置为边上
                            var window_form_edit = new Ext.FormPanel({//初始化表单面板
                                id: 'window_form_edit',
                                name: 'window_form_edit',
                                labelWidth: 60, // 默认标签宽度板
                                labelAlign: 'right',
                                baseCls: 'x-plain',//不设置该值，表单将保持原样，设置后表单与窗体完全融合（-_-!!，说不清了，大家可以去掉运行下看看）
                                bodyStyle: 'padding:5px 5px 0',
                                width: 350,
                                frame: true,
                                //border: false,
                                defaults: {
                                    width: 320,
                                    height: 260
                                },
                                defaultType: 'textfield',//默认字段类型
                                items: [{
                                    xtype: 'fieldset',
                                    title: '名片信息',
                                    defaults: {
                                        xtype: 'textfield',
                                        width: 200
                                    },
                                    items: [{
                                        name: 'id',
                                        fieldLabel: 'id',
                                        xtype: 'hidden',
                                        value: rows[i].get("id")
                                    }, {
                                        name: 'name',
                                        fieldLabel: '姓名',
                                        allowBlank: false,
                                        blankText: '姓名不能为空',
                                        value: rows[i].get("name")
                                    }, {
                                        name: 'tell',
                                        fieldLabel: '手机号码',
                                        allowBlank: false,
                                        blankText: '手机号码不能为空',
                                        value: rows[i].get("tell")
                                    }, {
                                        name: 'qq',
                                        fieldLabel: 'QQ',
                                        allowBlank: false,
                                        blankText: 'QQ号码不能为空',
                                        value: rows[i].get("qq")
                                    }, {
                                        name: 'email',
                                        fieldLabel: '邮箱',
                                        allowBlank: false,
                                        blankText: '添加者邮箱不能为空',
                                        value: rows[i].get("email"),
                                        vtype: 'email',
                                        emailText: 'Email格式不正确'
                                    }, {
                                        name: 'school',
                                        fieldLabel: '毕业学校',
                                        allowBlank: false,
                                        blankText: '毕业院校不能为空',
                                        value: rows[i].get("school")
                                    }, {
                                        name: 'spec',
                                        fieldLabel: '专业',
                                        allowBlank: false,
                                        blankText: '专业不能为空',
                                        value: rows[i].get("spec")
                                    }, {
                                        name: 'home',
                                        fieldLabel: '家庭地址',
                                        allowBlank: false,
                                        blankText: '家庭地址不能为空',
                                        value: rows[i].get("home")
                                    }, {
                                        name: 'hometell',
                                        fieldLabel: '家庭电话',
                                        allowBlank: false,
                                        blankText: '家庭电话不能为空',
                                        value: rows[i].get("hometell")
                                    }, {
                                        name: 'work',
                                        fieldLabel: '工作单位',
                                        value: rows[i].get("work")
                                    }]
                                }],
                                buttons: [{
                                    text: '确定',
                                    handler: function(){//添加网站
                                        if (edit_widow.getComponent('window_form_edit').form.isValid()) {
                                            edit_widow.getComponent('window_form_edit').form.submit({
                                                waitTitle: '请稍候',
                                                waitMsg: '正在提交数据,请稍候....',
                                                url: '_action.php?action=edit',
                                                method: 'POST',
                                                success: function(form, action){
                                                    var Result = action.result.success;
                                                    if (Result == false) {
                                                        Ext.MessageBox.alert('提示', action.result.message);
                                                    }
                                                    else 
                                                        if (Result == true) {
                                                            //Ext.MessageBox.alert('提示', action.result.message);
                                                            //window_form_add.form.reset();
                                                            store.load({
                                                                params: {
                                                                    start: 0,
                                                                    limit: 30
                                                                }
                                                            });
                                                            edit_widow.close();
                                                        }
                                                },
                                                failure: function(form, action){
                                                    Ext.MessageBox.alert('提示', action.result.message);
                                                    window_form_edit.form.reset();
                                                }
                                                
                                            })
                                        }
                                    }
                                }, {
                                    text: '取消',
                                    handler: function(){
                                        window_form_edit.form.reset();
                                    }
                                }]
                            });
                            var edit_widow = new Ext.Window({
                                title: "修改记录--" + rows[i].get("name"),
                                width: 350,
                                height: 350,
                                modal: true,
                                maximizable: true,
                                items: window_form_edit
                            });
                            edit_widow.show();
                        }
                    }
                }

                store.load({
                    params: {
                        start: 0,
                        limit: 25
                    }
                });
                
                var ct = new Ext.Panel({
                    tbar: [
                        search_pannel,//搜索表单
                        {
                            text: '搜索&nbsp;&nbsp;&nbsp;',
                            icon: "images/page_find.png",
                            cls: "x-btn-text-icon",
                            handler: function(){
                                // 这里是关键，重新载入数据源，并把搜索表单值提交
                                store.load({
                                    params: {
                                        start: 0,
                                        limit: 25,
                                        title: Ext.get('title').dom.value//取得搜索表单文本域的值，发送到服务端
                                    }
                                })
                            }
                        },
                        {
                            xtype: "tbseparator"
                        },
                        tb_text,
                        {
                            text: "&nbsp;修改我的资料",
                            icon: "images/chart_pie_edit.png",
                            cls: "x-btn-text-icon",
                            handler: edit
                        }
                    ],
                    renderTo: "content",//这里指定渲染到层的id
                    frame: false,
                    title: '通信录',
                    height: 580,
                    layout: 'border',
                    items: [
                        grid,
                        {
                            id: 'detailPanel',
                            region: 'center',
                            bodyStyle: {
                                background: '#ffffff',
                                padding: '7px'
                            },
                            html: '<span style="color:gray; font-size:14px;">亲，这里可以显示同学的备注信息...</span>'
                        }
                    ]
                })
                
                // 用来填充表格的下半部分内容
                var bookTplMarkup = [
                    '姓名: {name}<br/>',
                    '备注: {comment}<br/>'
                ];
                
                var bookTpl = new Ext.Template(bookTplMarkup);
                
                grid.getSelectionModel().on('rowselect', function(sm, rowIdx, r) {
                    var detailPanel = Ext.getCmp('detailPanel');
                    bookTpl.overwrite(detailPanel.body, r.data);
                });
                
                //这里设定每次加载前把搜索条件加上
                store.on('beforeload', function(){
                    Ext.apply(this.baseParams, {
                        title: Ext.get('title').dom.value
                    });
                });
                
                function toggleDetails(btn, pressed){
                    var view = grid.getView();
                    view.showPreview = pressed;
                    view.refresh();
                }
            });