import React from 'react'
import PageHeader from '../../shared/layout-components/page-header/page-header'
import Seo from '../../shared/layout-components/seo/seo';
import { Card, Col, Row } from 'react-bootstrap';
import { TreeItem } from '@mui/x-tree-view';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
//Matterial ICONS
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GmailRichTreeView from '../../shared/data/advanceui/icon-treeview';

const TheeViews = () => {
  return (
    <>
      <Seo title="Three View" />
      <PageHeader title="Tree view" item="Advanced UI" active_item="Tree view" />
      {/* <!-- container --> */}

      {/* <!-- row --> */}
      <Row>
        <Col md={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="main-content-label mg-b-5">
                Basic RichTreeView
              </div>
              <p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
              <Row>
                {/* <!-- col --> */}
                <Col lg={4} className="">
                  <SimpleTreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    <TreeItem itemId="7771" label="TECH">
                      <TreeItem itemId="7772" label="Company Maintenance" />
                      <TreeItem itemId="7773" label="Employees">
                        <TreeItem itemId="7774" label="Reports" />
                      </TreeItem>
                      <TreeItem itemId="7775" label="Human Resources" />
                    </TreeItem>
                    <TreeItem itemId="7776" label="XRP">
                      <TreeItem itemId="7777" label="Company Maintenance" />
                      <TreeItem itemId="7778" label="Employees">
                        <TreeItem itemId="7779" label="Reports" />
                      </TreeItem>
                      <TreeItem itemId="77710" label="Human Resources" />
                    </TreeItem>
                  </SimpleTreeView >
                </Col>
                {/* <!-- /col --> */}

                {/* <!-- col --> */}
                <Col lg={4} className="mt-4 mt-lg-0">
                  <SimpleTreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<RemoveCircleOutlineIcon />}
                    defaultExpandIcon={<AddCircleOutlineIcon />}
                  >
                    <TreeItem itemId="555551" label="TECH">
                      <TreeItem itemId="555552" label="Company Maintenance" />
                      <TreeItem itemId="555553" label="Employees">
                        <TreeItem itemId="555554" label="Reports" />
                      </TreeItem>
                      <TreeItem itemId="555555" label="Human Resources" />
                    </TreeItem>
                    <TreeItem itemId="555556" label="XRP">
                      <TreeItem itemId="555557" label="Company Maintenance" />
                      <TreeItem itemId="555558" label="Employees">
                        <TreeItem itemId="555559" label="Reports" />
                      </TreeItem>
                      <TreeItem itemId="5555510" label="Human Resources" />
                    </TreeItem>
                  </SimpleTreeView>
                </Col>
                {/* <!-- /col --> */}

                {/* <!-- col --> */}
                <Col lg={4} className="mt-4 mt-lg-0">
                  <SimpleTreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<FolderOpenIcon />}
                    defaultExpandIcon={<FolderOpenIcon />}
                  >
                    <TreeItem itemId="66661" label="TECH">
                      <TreeItem itemId="66662" label="Company Maintenance" />
                      <TreeItem itemId="66663" label="Employees">
                        <TreeItem itemId="66664" label="Reports" />
                      </TreeItem>
                      <TreeItem itemId="66665" label="Human Resources" />
                    </TreeItem>
                    <TreeItem itemId="66666" label="XRP">
                      <TreeItem itemId="66667" label="Company Maintenance" />
                      <TreeItem itemId="66668" label="Employees">
                        <TreeItem itemId="66669" label="Reports" />
                      </TreeItem>
                      <TreeItem itemId="666610" label="Human Resources" />
                    </TreeItem>
                  </SimpleTreeView>
                </Col>
                {/* <!-- /col --> */}
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <Col xl={8}>
              <Card className="mg-b-20">
                <Card.Body>
                  <div className="main-content-label mg-b-5">
                    Tree View Styles
                  </div>
                  <p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
                  <Row>
                    {/* <!-- col --> */}
                    <Col lg={4}>
                      <SimpleTreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<RemoveCircleOutlineIcon className='text-danger' />}
                        defaultExpandIcon={<AddCircleOutlineIcon className='text-primary' />}
                      >
                        <TreeItem itemId="1" label="SimpleTreeView  1">
                          <TreeItem itemId="2" label="Company Maintenance" />
                          <TreeItem itemId="3" label="Employees">
                            <TreeItem itemId="4" label="Reports">
                              <TreeItem itemId="5" label="Report1" />
                              <TreeItem itemId="6" label="Report2" />
                              <TreeItem itemId="7" label="Report3" />
                            </TreeItem>
                            <TreeItem itemId="8" label="Employee Maint.">
                              <TreeItem itemId="9" label="Reports">
                                <TreeItem itemId="10" label="Report1" />
                                <TreeItem itemId="11" label="Report2" />
                                <TreeItem itemId="12" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="13" label="Employee Maint." />
                              <TreeItem itemId="14" label="Reports">
                                <TreeItem itemId="15" label="Report1" />
                                <TreeItem itemId="16" label="Report2" />
                                <TreeItem itemId="17" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="18" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="19" label="Human Resources" />
                        </TreeItem>
                        <TreeItem itemId="20" label="SimpleTreeView  2">
                          <TreeItem itemId="21" label="Company Maintenance" />
                          <TreeItem itemId="22" label="Employees">
                            <TreeItem itemId="23" label="Reports">
                              <TreeItem itemId="24" label="Report1" />
                              <TreeItem itemId="25" label="Report2" />
                              <TreeItem itemId="26" label="Report3" />
                            </TreeItem>
                            <TreeItem itemId="27" label="Employee Maint.">
                              <TreeItem itemId="28" label="Reports">
                                <TreeItem itemId="29" label="Report1" />
                                <TreeItem itemId="30" label="Report2" />
                                <TreeItem itemId="31" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="32" label="Employee Maint." />
                              <TreeItem itemId="33" label="Reports">
                                <TreeItem itemId="34" label="Report1" />
                                <TreeItem itemId="35" label="Report2" />
                                <TreeItem itemId="36" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="37" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="38" label="Human Resources" />
                        </TreeItem>
                        <TreeItem itemId="39" label="SimpleTreeView  3">
                          <TreeItem itemId="40" label="Company Maintenance" />
                          <TreeItem itemId="41" label="Employees">
                            <TreeItem itemId="42" label="Reports">
                              <TreeItem itemId="43" label="Report1" />
                              <TreeItem itemId="44" label="Report2" />
                              <TreeItem itemId="45" label="Report3" />
                            </TreeItem>
                            <TreeItem itemId="46" label="Employee Maint.">
                              <TreeItem itemId="47" label="Reports">
                                <TreeItem itemId="48" label="Report1" />
                                <TreeItem itemId="49" label="Report2" />
                                <TreeItem itemId="50" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="51" label="Employee Maint." />
                              <TreeItem itemId="52" label="Reports">
                                <TreeItem itemId="53" label="Report1" />
                                <TreeItem itemId="54" label="Report2" />
                                <TreeItem itemId="55" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="56" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="57" label="Human Resources" />
                        </TreeItem>
                        <TreeItem itemId="58" label="SimpleTreeView  4">
                          <TreeItem itemId="59" label="Company Maintenance" />
                          <TreeItem itemId="60" label="Employees">
                            <TreeItem itemId="61" label="Reports">
                              <TreeItem itemId="62" label="Report1" />
                              <TreeItem itemId="63" label="Report2" />
                              <TreeItem itemId="64" label="Report3" />
                            </TreeItem>
                            <TreeItem itemId="65" label="Employee Maint.">
                              <TreeItem itemId="66" label="Reports">
                                <TreeItem itemId="67" label="Report1" />
                                <TreeItem itemId="68" label="Report2" />
                                <TreeItem itemId="69" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="70" label="Employee Maint." />
                              <TreeItem itemId="71" label="Reports">
                                <TreeItem itemId="72" label="Report1" />
                                <TreeItem itemId="73" label="Report2" />
                                <TreeItem itemId="74" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="75" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="76" label="Human Resources" />
                        </TreeItem>
                        <TreeItem itemId="77" label="SimpleTreeView  5">
                          <TreeItem itemId="78" label="Company Maintenance" />
                          <TreeItem itemId="79" label="Employees">
                            <TreeItem itemId="80" label="Reports">
                              <TreeItem itemId="81" label="Report1" />
                              <TreeItem itemId="82" label="Report2" />
                              <TreeItem itemId="83" label="Report3" />
                            </TreeItem>
                            <TreeItem itemId="84" label="Employee Maint.">
                              <TreeItem itemId="85" label="Reports">
                                <TreeItem itemId="86" label="Report1" />
                                <TreeItem itemId="87" label="Report2" />
                                <TreeItem itemId="88" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="89" label="Employee Maint." />
                              <TreeItem itemId="90" label="Reports">
                                <TreeItem itemId="91" label="Report1" />
                                <TreeItem itemId="92" label="Report2" />
                                <TreeItem itemId="93" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="94" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="95" label="Human Resources" />
                        </TreeItem>
                        <TreeItem itemId="96" label="SimpleTreeView  6">
                          <TreeItem itemId="97" label="Company Maintenance" />
                          <TreeItem itemId="98" label="Employees">
                            <TreeItem itemId="99" label="Reports">
                              <TreeItem itemId="100" label="Report1" />
                              <TreeItem itemId="101" label="Report2" />
                              <TreeItem itemId="102" label="Report3" />
                            </TreeItem>
                            <TreeItem itemId="103" label="Employee Maint.">
                              <TreeItem itemId="104" label="Reports">
                                <TreeItem itemId="105" label="Report1" />
                                <TreeItem itemId="106" label="Report2" />
                                <TreeItem itemId="107" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="108" label="Employee Maint." />
                              <TreeItem itemId="109" label="Reports">
                                <TreeItem itemId="110" label="Report1" />
                                <TreeItem itemId="111" label="Report2" />
                                <TreeItem itemId="112" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="113" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="114" label="Human Resources" />
                        </TreeItem>
                        <TreeItem itemId="115" label="SimpleTreeView  7">
                          <TreeItem itemId="116" label="Company Maintenance" />
                          <TreeItem itemId="117" label="Employees">
                            <TreeItem itemId="118" label="Reports">
                              <TreeItem itemId="119" label="Report1" />
                              <TreeItem itemId="120" label="Report2" />
                              <TreeItem itemId="121" label="Report3" />
                            </TreeItem>
                            <TreeItem itemId="122" label="Employee Maint.">
                              <TreeItem itemId="123" label="Reports">
                                <TreeItem itemId="124" label="Report1" />
                                <TreeItem itemId="125" label="Report2" />
                                <TreeItem itemId="126" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="127" label="Employee Maint." />
                              <TreeItem itemId="128" label="Reports">
                                <TreeItem itemId="129" label="Report1" />
                                <TreeItem itemId="130" label="Report2" />
                                <TreeItem itemId="131" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="132" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="133" label="Human Resources" />
                        </TreeItem>
                        <TreeItem itemId="134" label="SimpleTreeView  8">
                          <TreeItem itemId="135" label="Company Maintenance" />
                          <TreeItem itemId="136" label="Employees">
                            <TreeItem itemId="137" label="Reports">
                              <TreeItem itemId="138" label="Report1" />
                              <TreeItem itemId="139" label="Report2" />
                              <TreeItem itemId="140" label="Report3" />
                            </TreeItem>
                            <TreeItem itemId="141" label="Employee Maint.">
                              <TreeItem itemId="142" label="Reports">
                                <TreeItem itemId="143" label="Report1" />
                                <TreeItem itemId="144" label="Report2" />
                                <TreeItem itemId="145" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="146" label="Employee Maint." />
                              <TreeItem itemId="147" label="Reports">
                                <TreeItem itemId="148" label="Report1" />
                                <TreeItem itemId="149" label="Report2" />
                                <TreeItem itemId="150" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="151" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="152" label="Human Resources" />
                        </TreeItem>
                        <TreeItem itemId="153" label="SimpleTreeView  9">
                          <TreeItem itemId="154" label="Company Maintenance" />
                          <TreeItem itemId="155" label="Employees">
                            <TreeItem itemId="156" label="Reports">
                              <TreeItem itemId="157" label="Report1" />
                              <TreeItem itemId="158" label="Report2" />
                              <TreeItem itemId="159" label="Report3" />
                            </TreeItem>
                            <TreeItem itemId="160" label="Employee Maint.">
                              <TreeItem itemId="161" label="Reports">
                                <TreeItem itemId="162" label="Report1" />
                                <TreeItem itemId="163" label="Report2" />
                                <TreeItem itemId="164" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="165" label="Employee Maint." />
                              <TreeItem itemId="166" label="Reports">
                                <TreeItem itemId="167" label="Report1" />
                                <TreeItem itemId="168" label="Report2" />
                                <TreeItem itemId="169" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="170" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="171" label="Human Resources" />
                        </TreeItem>
                        <TreeItem itemId="172" label="SimpleTreeView  10">
                          <TreeItem itemId="173" label="Company Maintenance" />
                          <TreeItem itemId="174" label="Employees">
                            <TreeItem itemId="175" label="Reports">
                              <TreeItem itemId="176" label="Report1" />
                              <TreeItem itemId="177" label="Report2" />
                              <TreeItem itemId="178" label="Report3" />
                            </TreeItem>
                            <TreeItem itemId="179" label="Employee Maint.">
                              <TreeItem itemId="180" label="Reports">
                                <TreeItem itemId="181" label="Report1" />
                                <TreeItem itemId="182" label="Report2" />
                                <TreeItem itemId="183" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="184" label="Employee Maint." />
                              <TreeItem itemId="185" label="Reports">
                                <TreeItem itemId="186" label="Report1" />
                                <TreeItem itemId="187" label="Report2" />
                                <TreeItem itemId="188" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="189" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="190" label="Human Resources" />
                        </TreeItem>
                        <TreeItem itemId="191" label="SimpleTreeView  11">
                          <TreeItem itemId="192" label="Company Maintenance" />
                          <TreeItem itemId="193" label="Employees">
                            <TreeItem itemId="194" label="Reports">
                              <TreeItem itemId="195" label="Report1" />
                              <TreeItem itemId="196" label="Report2" />
                              <TreeItem itemId="197" label="Report3" />
                            </TreeItem>
                            <TreeItem itemId="198" label="Employee Maint.">
                              <TreeItem itemId="199" label="Reports">
                                <TreeItem itemId="200" label="Report1" />
                                <TreeItem itemId="201" label="Report2" />
                                <TreeItem itemId="202" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="203" label="Employee Maint." />
                              <TreeItem itemId="204" label="Reports">
                                <TreeItem itemId="205" label="Report1" />
                                <TreeItem itemId="206" label="Report2" />
                                <TreeItem itemId="207" label="Report3" />
                              </TreeItem>
                              <TreeItem itemId="208" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="209" label="Human Resources" />
                        </TreeItem>
                      </SimpleTreeView>
                    </Col>
                    {/* <!-- /col --> */}

                    {/* <!-- col --> */}
                    <Col lg={4} className="mt-4 mt-lg-0">
                      <SimpleTreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<RemoveCircleOutlineIcon className='text-danger' />}
                        defaultExpandIcon={<AddCircleOutlineIcon className='text-primary' />}
                      >
                        <TreeItem itemId="321" label="SimpleTreeView  1">
                          <TreeItem itemId="322" label="Company Maintenance" className='text-warning' />
                          <TreeItem itemId="323" label="Employees" className='text-pink'>
                            <TreeItem itemId="324" label="Reports">
                              <TreeItem itemId="325" label="Report1" className='text-success' />
                              <TreeItem itemId="326" label="Report2" className='text-success' />
                              <TreeItem itemId="327" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem itemId="328" label="Employee Maint.">
                              <TreeItem itemId="329" label="Reports">
                                <TreeItem itemId="3210" label="Report1" className='text-success' />
                                <TreeItem itemId="3211" label="Report2" className='text-success' />
                                <TreeItem itemId="3212" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem itemId="3213" label="Employee Maint." className='text-warning' />
                              <TreeItem itemId="3214" label="Reports">
                                <TreeItem itemId="3215" label="Report1" className='text-success' />
                                <TreeItem itemId="3216" label="Report2" className='text-success' />
                                <TreeItem itemId="3217" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem itemId="3218" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="3219" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem itemId="3220" label="SimpleTreeView  1">
                          <TreeItem itemId="3221" label="Company Maintenance" className='text-warning' />
                          <TreeItem itemId="3222" label="Employees" className='text-pink'>
                            <TreeItem itemId="3223" label="Reports">
                              <TreeItem itemId="3224" label="Report1" className='text-success' />
                              <TreeItem itemId="3225" label="Report2" className='text-success' />
                              <TreeItem itemId="3226" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem itemId="3227" label="Employee Maint.">
                              <TreeItem itemId="3228" label="Reports">
                                <TreeItem itemId="3229" label="Report1" className='text-success' />
                                <TreeItem itemId="3230" label="Report2" className='text-success' />
                                <TreeItem itemId="3231" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem itemId="3232" label="Employee Maint." className='text-warning' />
                              <TreeItem itemId="3233" label="Reports">
                                <TreeItem itemId="3234" label="Report1" className='text-success' />
                                <TreeItem itemId="3235" label="Report2" className='text-success' />
                                <TreeItem itemId="3236" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem itemId="3237" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="3238" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem itemId="3239" label="RichTreeView 1">
                          <TreeItem itemId="3240" label="Company Maintenance" className='text-warning' />
                          <TreeItem itemId="3241" label="Employees" className='text-pink'>
                            <TreeItem itemId="3242" label="Reports">
                              <TreeItem itemId="3243" label="Report1" className='text-success' />
                              <TreeItem itemId="3244" label="Report2" className='text-success' />
                              <TreeItem itemId="3245" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem itemId="3246" label="Employee Maint.">
                              <TreeItem itemId="3247" label="Reports">
                                <TreeItem itemId="3248" label="Report1" className='text-success' />
                                <TreeItem itemId="3249" label="Report2" className='text-success' />
                                <TreeItem itemId="3250" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem itemId="3251" label="Employee Maint." className='text-warning' />
                              <TreeItem itemId="3252" label="Reports">
                                <TreeItem itemId="3253" label="Report1" className='text-success' />
                                <TreeItem itemId="3254" label="Report2" className='text-success' />
                                <TreeItem itemId="3255" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem itemId="3256" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="3257" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem itemId="3258" label="RichTreeView 1">
                          <TreeItem itemId="3259" label="Company Maintenance" className='text-warning' />
                          <TreeItem itemId="3260" label="Employees" className='text-pink'>
                            <TreeItem itemId="3261" label="Reports">
                              <TreeItem itemId="3262" label="Report1" className='text-success' />
                              <TreeItem itemId="3263" label="Report2" className='text-success' />
                              <TreeItem itemId="3264" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem itemId="3265" label="Employee Maint.">
                              <TreeItem itemId="3266" label="Reports">
                                <TreeItem itemId="3267" label="Report1" className='text-success' />
                                <TreeItem itemId="3268" label="Report2" className='text-success' />
                                <TreeItem itemId="3269" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem itemId="3270" label="Employee Maint." className='text-warning' />
                              <TreeItem itemId="3271" label="Reports">
                                <TreeItem itemId="3272" label="Report1" className='text-success' />
                                <TreeItem itemId="3273" label="Report2" className='text-success' />
                                <TreeItem itemId="3274" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem itemId="3275" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="3276" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem itemId="3277" label="RichTreeView 1">
                          <TreeItem itemId="3278" label="Company Maintenance" className='text-warning' />
                          <TreeItem itemId="3279" label="Employees" className='text-pink'>
                            <TreeItem itemId="3280" label="Reports">
                              <TreeItem itemId="3281" label="Report1" className='text-success' />
                              <TreeItem itemId="3282" label="Report2" className='text-success' />
                              <TreeItem itemId="3283" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem itemId="3284" label="Employee Maint.">
                              <TreeItem itemId="3285" label="Reports">
                                <TreeItem itemId="3286" label="Report1" className='text-success' />
                                <TreeItem itemId="3287" label="Report2" className='text-success' />
                                <TreeItem itemId="3288" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem itemId="3289" label="Employee Maint." className='text-warning' />
                              <TreeItem itemId="3290" label="Reports">
                                <TreeItem itemId="3291" label="Report1" className='text-success' />
                                <TreeItem itemId="3292" label="Report2" className='text-success' />
                                <TreeItem itemId="3293" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem itemId="3294" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="3295" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem itemId="3296" label="RichTreeView 1">
                          <TreeItem itemId="3297" label="Company Maintenance" className='text-warning' />
                          <TreeItem itemId="3298" label="Employees" className='text-pink'>
                            <TreeItem itemId="3299" label="Reports">
                              <TreeItem itemId="32100" label="Report1" className='text-success' />
                              <TreeItem itemId="32101" label="Report2" className='text-success' />
                              <TreeItem itemId="32102" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem itemId="32103" label="Employee Maint.">
                              <TreeItem itemId="32104" label="Reports">
                                <TreeItem itemId="32105" label="Report1" className='text-success' />
                                <TreeItem itemId="32106" label="Report2" className='text-success' />
                                <TreeItem itemId="32107" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem itemId="32108" label="Employee Maint." className='text-warning' />
                              <TreeItem itemId="32109" label="Reports">
                                <TreeItem itemId="32110" label="Report1" className='text-success' />
                                <TreeItem itemId="32111" label="Report2" className='text-success' />
                                <TreeItem itemId="32112" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem itemId="32113" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem itemId="32114" label="Human Resources" className='text-warning' />
                        </TreeItem>
                      </SimpleTreeView >
                    </Col>
                    {/* <!-- /col --> */}
                  </Row>
                  {/* <!-- col --> */}
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4}>
              <Card className="mg-b-20">
                <Card.Body>
                  <div className="main-content-label mg-b-5">
                    Custom icons Tree View Styles
                  </div>
                  <p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
                  <Row>
                    {/* <!-- col --> */}
                    <Col lg={12} className="mt-4 mt-lg-0">
                      <GmailRichTreeView />
                    </Col>
                    {/* <!-- /col --> */}
                  </Row>
                  {/* <!-- col --> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

      </Row>
      {/* <!-- row --> */}

      {/* <!-- Container closed --> */}
    </>
  )
}
TheeViews.layout = "Contentlayout"

export default TheeViews