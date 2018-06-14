<template>
  <div>
    <layout title="Advertisers">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">Data Table With Full Features</h3>
          <div class="box-controls pull-right">
            <button id="row-count" class="btn btn-xs btn-primary">Row count</button>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <div id="example_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
            <div class="row">
              <div class="col-sm-6">
                <div class="dataTables_length" id="example_length"><label>Show <select name="example_length"
                                                                                       aria-controls="example"
                                                                                       class="form-control input-sm">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select> entries</label></div>
              </div>
              <div class="col-sm-6">
                <div id="example_filter" class="dataTables_filter"><label>Search:<input type="search"
                                                                                        class="form-control input-sm"
                                                                                        placeholder=""
                                                                                        aria-controls="example"></label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <table id="example" class="table table-striped table-bordered dataTable" style="width: 100%;"
                       role="grid" aria-describedby="example_info">
                  <thead>
                  <tr role="row">
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                        aria-label="Name: activate to sort column ascending" style="width: 128px;">Name
                    </th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                        aria-label="Position: activate to sort column ascending" style="width: 208px;">Position
                    </th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                        aria-label="Office: activate to sort column ascending" style="width: 94px;">Office
                    </th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                        aria-label="Age: activate to sort column ascending" style="width: 40px;">Age
                    </th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                        aria-label="Start date: activate to sort column ascending" style="width: 85px;">Start date
                    </th>
                    <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1"
                        aria-label="Salary: activate to sort column descending" aria-sort="ascending"
                        style="width: 72px;">Salary
                    </th>
                  </tr>
                  </thead>
                  <tbody>


                  <tr role="row" class="odd">
                    <td class="">Jennifer Acosta</td>
                    <td class="">Junior Javascript Developer</td>
                    <td class="">Edinburgh</td>
                    <td class="">43</td>
                    <td class="">2013/02/01</td>
                    <td class="sorting_1">$75,650</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="">Doris Wilder</td>
                    <td class="">Sales Assistant</td>
                    <td class="">Sidney</td>
                    <td class="">23</td>
                    <td class="">2010/09/20</td>
                    <td class="sorting_1">$85,600</td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="">Unity Butler</td>
                    <td class="">Marketing Designer</td>
                    <td class="">San Francisco</td>
                    <td class="">47</td>
                    <td class="">2009/12/09</td>
                    <td class="sorting_1">$85,675</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="">Ashton Cox</td>
                    <td class="">Junior Technical Author</td>
                    <td class="">San Francisco</td>
                    <td class="">66</td>
                    <td class="">2009/01/12</td>
                    <td class="sorting_1">$86,000</td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="">Jonas Alexander</td>
                    <td class="">Developer</td>
                    <td class="">San Francisco</td>
                    <td class="">30</td>
                    <td class="">2010/07/14</td>
                    <td class="sorting_1">$86,500</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="">Finn Camacho</td>
                    <td class="">Support Engineer</td>
                    <td class="">San Francisco</td>
                    <td class="">47</td>
                    <td class="">2009/07/07</td>
                    <td class="sorting_1">$87,500</td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="">Jena Gaines</td>
                    <td class="">Office Manager</td>
                    <td class="">London</td>
                    <td class="">30</td>
                    <td class="">2008/12/19</td>
                    <td class="sorting_1">$90,560</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="">Gavin Joyce</td>
                    <td class="">Developer</td>
                    <td class="">Edinburgh</td>
                    <td class="">42</td>
                    <td class="">2010/12/22</td>
                    <td class="sorting_1">$92,575</td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="">Michelle House</td>
                    <td class="">Integration Specialist</td>
                    <td class="">Sidney</td>
                    <td class="">37</td>
                    <td class="">2011/06/02</td>
                    <td class="sorting_1">$95,400</td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="">Thor Walton</td>
                    <td class="">Developer</td>
                    <td class="">New York</td>
                    <td class="">61</td>
                    <td class="">2013/08/11</td>
                    <td class="sorting_1">$98,540</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <th rowspan="1" colspan="1">Name</th>
                    <th rowspan="1" colspan="1">Position</th>
                    <th rowspan="1" colspan="1">Office</th>
                    <th rowspan="1" colspan="1">Age</th>
                    <th rowspan="1" colspan="1">Start date</th>
                    <th rowspan="1" colspan="1">Salary</th>
                  </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5">
                <div class="dataTables_info" id="example_info" role="status" aria-live="polite">Showing 1 to 10 of 57
                  entries
                </div>
              </div>
              <div class="col-sm-7">
                <div class="dataTables_paginate paging_simple_numbers" id="example_paginate">
                  <ul class="pagination">
                    <li class="paginate_button previous disabled" id="example_previous"><a href="#"
                                                                                           aria-controls="example"
                                                                                           data-dt-idx="0" tabindex="0">Previous</a>
                    </li>
                    <li class="paginate_button active"><a href="#" aria-controls="example" data-dt-idx="1" tabindex="0">1</a>
                    </li>
                    <li class="paginate_button "><a href="#" aria-controls="example" data-dt-idx="2" tabindex="0">2</a>
                    </li>
                    <li class="paginate_button "><a href="#" aria-controls="example" data-dt-idx="3" tabindex="0">3</a>
                    </li>
                    <li class="paginate_button "><a href="#" aria-controls="example" data-dt-idx="4" tabindex="0">4</a>
                    </li>
                    <li class="paginate_button "><a href="#" aria-controls="example" data-dt-idx="5" tabindex="0">5</a>
                    </li>
                    <li class="paginate_button "><a href="#" aria-controls="example" data-dt-idx="6" tabindex="0">6</a>
                    </li>
                    <li class="paginate_button next" id="example_next"><a href="#" aria-controls="example"
                                                                          data-dt-idx="7" tabindex="0">Next</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.box-body -->
      </div>
    </layout>
  </div>
</template>

<script>
  import Layout from '~/components/layout/Layout.vue'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      Layout,
    },
  }
</script>
