<?php


namespace App\Services\Job;


use App\Models\Job;

class JobService
{

    public function getJobs()
    {
        return Job::all();
    }
}
