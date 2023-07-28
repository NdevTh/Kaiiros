<?php
    
    /* get current local language */
    $iso_code = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    include "header.inc.php";   
    //echo substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
?>
        <form method="get" action="search.php" class="text-center main">
  
            <!-- Actual search box >
            <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search">
            </div-->
            <img class="img-fluid" src="img/logo.png"/>
            <!-- Another variation with a button -->
            <div class="input-group">
                <input name="q" type="text" class="form-control" placeholder="<?php echo translation('enter keyword',$iso_code); ?>">
                <div class="input-group-append">
                <button class="btn btn-secondary" type="submit">
                    <i class="fa fa-search"></i>
                </button>
                </div>
            </div>
            
            <!--p class="mt-4 text-center"><a href="https://www.gungorbudak.com/blog/2018/12/12/bootstrap-4-search-box-with-search-icon/">See how it's done on my blog</a></p-->
        </form>
<?php  include "footer.inc.php"; ?>